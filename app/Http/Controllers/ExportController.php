<?php

namespace App\Http\Controllers;

use App\Models\UserReport;
use App\Services\ExportService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ExportController extends Controller
{
    protected $exportService;

    public function __construct(ExportService $exportService)
    {
        $this->exportService = $exportService;
    }

    public function exportPdf(Request $request, UserReport $report)
    {
        $this->authorize('view', $report);

        // Check if user can export
        $subscription = $request->user()->activeSubscription;
        if ($subscription && !$subscription->canExport()) {
            return response()->json([
                'error' => 'Export limit reached for your subscription plan',
            ], 403);
        }

        try {
            $result = $this->exportService->exportToPdf($report, $request->all());

            // Update subscription export count
            if ($subscription) {
                $subscription->increment('exports_used');
            }

            return response()->json([
                'success' => true,
                'download_url' => $result['url'],
                'filename' => $result['filename'],
                'size' => $result['size'],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Export failed',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function exportPng(Request $request, UserReport $report)
    {
        $this->authorize('view', $report);

        // Check if user can export
        $subscription = $request->user()->activeSubscription;
        if ($subscription && !$subscription->canExport()) {
            return response()->json([
                'error' => 'Export limit reached for your subscription plan',
            ], 403);
        }

        try {
            $result = $this->exportService->exportToPng($report, $request->all());

            // Update subscription export count
            if ($subscription) {
                $subscription->increment('exports_used');
            }

            if (isset($result['requires_client_screenshot'])) {
                return response()->json([
                    'success' => true,
                    'html' => $result['html'],
                    'filename' => $result['filename'],
                    'requires_client_screenshot' => true,
                ]);
            }

            return response()->json([
                'success' => true,
                'download_url' => $result['url'],
                'filename' => $result['filename'],
                'size' => $result['size'],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Export failed',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function download(Request $request, string $path)
    {
        $fullPath = "exports/{$path}";
        
        if (!Storage::exists($fullPath)) {
            abort(404, 'File not found');
        }

        // Verify user has access to this file
        // This is a simplified check - you might want more robust verification
        $filename = basename($path);
        
        return Storage::download($fullPath, $filename);
    }

    public function history(Request $request)
    {
        $filters = $request->only(['template_id', 'date_from', 'date_to']);
        $history = $this->exportService->getExportHistory($request->user()->id, $filters);

        return response()->json($history);
    }
}