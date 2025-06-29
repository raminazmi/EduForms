<?php

namespace App\Services;

use App\Models\UserReport;
use Barryvdh\DomPDF\Facade\Pdf;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ExportService
{
    public function exportToPdf(UserReport $report, array $options = [])
    {
        $html = $this->generateHtml($report, $options);
        
        $pdf = Pdf::loadHTML($html)
            ->setPaper($report->template->paper_size ?? 'A4', $report->template->orientation ?? 'portrait')
            ->setOptions([
                'dpi' => 150,
                'defaultFont' => 'DejaVu Sans',
                'isHtml5ParserEnabled' => true,
                'isPhpEnabled' => true,
                'isRemoteEnabled' => true,
            ]);

        $filename = $this->generateFilename($report, 'pdf');
        
        // Save to storage
        $path = "exports/pdf/{$filename}";
        Storage::put($path, $pdf->output());

        // Update report export count
        $report->incrementExportCount();

        return [
            'path' => $path,
            'url' => Storage::url($path),
            'filename' => $filename,
            'size' => Storage::size($path),
        ];
    }

    public function exportToPng(UserReport $report, array $options = [])
    {
        // First generate PDF
        $html = $this->generateHtml($report, $options);
        
        $pdf = Pdf::loadHTML($html)
            ->setPaper($report->template->paper_size ?? 'A4', $report->template->orientation ?? 'portrait');

        // Convert PDF to image using Imagick
        $pdfContent = $pdf->output();
        $tempPdfPath = storage_path('app/temp/' . Str::random(10) . '.pdf');
        file_put_contents($tempPdfPath, $pdfContent);

        try {
            $imagick = new \Imagick();
            $imagick->setResolution(300, 300);
            $imagick->readImage($tempPdfPath);
            $imagick->setImageFormat('png');
            $imagick->setImageCompressionQuality(90);

            $filename = $this->generateFilename($report, 'png');
            $path = "exports/png/{$filename}";
            
            Storage::put($path, $imagick->getImageBlob());

            // Clean up
            unlink($tempPdfPath);
            $imagick->clear();
            $imagick->destroy();

            // Update report export count
            $report->incrementExportCount();

            return [
                'path' => $path,
                'url' => Storage::url($path),
                'filename' => $filename,
                'size' => Storage::size($path),
            ];
        } catch (\Exception $e) {
            // Fallback: use browser-based screenshot
            return $this->exportToPngFallback($report, $options);
        }
    }

    protected function exportToPngFallback(UserReport $report, array $options = [])
    {
        // Generate HTML for browser screenshot
        $html = $this->generateHtml($report, array_merge($options, ['for_screenshot' => true]));
        
        $filename = $this->generateFilename($report, 'png');
        $path = "exports/png/{$filename}";

        // This would typically use a service like Puppeteer or similar
        // For now, we'll return the HTML for client-side screenshot
        return [
            'html' => $html,
            'filename' => $filename,
            'path' => $path,
            'requires_client_screenshot' => true,
        ];
    }

    protected function generateHtml(UserReport $report, array $options = [])
    {
        $template = $report->template;
        $data = $report->data;
        $images = $report->images ?? [];

        // Load template structure
        $structure = $template->structure;
        
        // Generate barcode if needed
        $barcodeData = null;
        if ($template->has_barcode && $report->barcode_data) {
            $barcodeData = $this->generateBarcode($report->barcode_data);
        }

        // Build HTML based on template structure
        $html = view('exports.template', [
            'report' => $report,
            'template' => $template,
            'data' => $data,
            'images' => $images,
            'barcode' => $barcodeData,
            'structure' => $structure,
            'options' => $options,
        ])->render();

        return $html;
    }

    protected function generateBarcode(string $data): string
    {
        // Generate barcode using a library like picqer/php-barcode-generator
        $generator = new \Picqer\Barcode\BarcodeGeneratorPNG();
        $barcode = $generator->getBarcode($data, $generator::TYPE_CODE_128);
        
        return 'data:image/png;base64,' . base64_encode($barcode);
    }

    protected function generateFilename(UserReport $report, string $extension): string
    {
        $timestamp = now()->format('Y-m-d_H-i-s');
        $reportTitle = Str::slug($report->title);
        
        return "{$reportTitle}_{$timestamp}.{$extension}";
    }

    public function getExportHistory(int $userId, array $filters = [])
    {
        $query = UserReport::where('user_id', $userId)
            ->where('export_count', '>', 0)
            ->with('template')
            ->orderBy('last_exported_at', 'desc');

        if (isset($filters['template_id'])) {
            $query->where('template_id', $filters['template_id']);
        }

        if (isset($filters['date_from'])) {
            $query->where('last_exported_at', '>=', $filters['date_from']);
        }

        if (isset($filters['date_to'])) {
            $query->where('last_exported_at', '<=', $filters['date_to']);
        }

        return $query->paginate(20);
    }
}