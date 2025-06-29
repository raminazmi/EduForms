import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { router } from '@inertiajs/react';
import {
    DocumentArrowDownIcon,
    PhotoIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline';

interface ExportButtonProps {
    reportId: number;
    className?: string;
}

export default function ExportButton({ reportId, className = '' }: ExportButtonProps) {
    const { t } = useTranslation();
    const [isExporting, setIsExporting] = useState(false);
    const [exportType, setExportType] = useState<'pdf' | 'png' | null>(null);

    const handleExport = async (type: 'pdf' | 'png') => {
        setIsExporting(true);
        setExportType(type);

        try {
            const response = await fetch(route('reports.export', { report: reportId, format: type }), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
            });

            const result = await response.json();

            if (result.success) {
                if (result.requires_client_screenshot) {
                    // Handle client-side screenshot for PNG
                    await handleClientScreenshot(result.html, result.filename);
                } else {
                    // Direct download
                    const link = document.createElement('a');
                    link.href = result.download_url;
                    link.download = result.filename;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            } else {
                alert(result.error || 'Export failed');
            }
        } catch (error) {
            console.error('Export error:', error);
            alert('Export failed');
        } finally {
            setIsExporting(false);
            setExportType(null);
        }
    };

    const handleClientScreenshot = async (html: string, filename: string) => {
        // Create a temporary iframe for screenshot
        const iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.left = '-9999px';
        iframe.style.width = '800px';
        iframe.style.height = '1200px';
        document.body.appendChild(iframe);

        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(html);
            iframeDoc.close();

            // Wait for content to load
            await new Promise(resolve => setTimeout(resolve, 1000));

            try {
                // Use html2canvas if available
                if (window.html2canvas) {
                    const canvas = await window.html2canvas(iframeDoc.body, {
                        width: 800,
                        height: 1200,
                        scale: 2,
                    });

                    // Download the image
                    const link = document.createElement('a');
                    link.download = filename;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                } else {
                    alert('Screenshot functionality not available. Please install html2canvas.');
                }
            } catch (error) {
                console.error('Screenshot error:', error);
                alert('Screenshot failed');
            }
        }

        document.body.removeChild(iframe);
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <button
                onClick={() => handleExport('pdf')}
                disabled={isExporting}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
                {isExporting && exportType === 'pdf' ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                    <DocumentTextIcon className="w-4 h-4" />
                )}
                {t('Export PDF')}
            </button>

            <button
                onClick={() => handleExport('png')}
                disabled={isExporting}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
                {isExporting && exportType === 'png' ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                    <PhotoIcon className="w-4 h-4" />
                )}
                {t('Export PNG')}
            </button>
        </div>
    );
}

// Add to window for global access
declare global {
    interface Window {
        html2canvas: any;
    }
}