<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $report->title }}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'IBM Plex Sans Arabic', Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
            direction: {{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }};
        }

        .report-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }

        .report-header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 20px;
        }

        .report-title {
            font-size: 24px;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 10px;
        }

        .report-subtitle {
            font-size: 16px;
            color: #6b7280;
        }

        .report-content {
            margin-bottom: 30px;
        }

        .field-group {
            margin-bottom: 20px;
        }

        .field-label {
            font-weight: 600;
            color: #374151;
            margin-bottom: 5px;
            display: block;
        }

        .field-value {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 10px;
            min-height: 40px;
        }

        .images-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .image-container {
            text-align: center;
        }

        .image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            border: 2px solid #e5e7eb;
        }

        .image-caption {
            margin-top: 8px;
            font-size: 12px;
            color: #6b7280;
        }

        .barcode-container {
            text-align: center;
            margin: 30px 0;
        }

        .barcode-container img {
            max-height: 80px;
        }

        .report-footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
        }

        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .three-column {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 15px;
        }

        @media print {
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            
            .report-container {
                max-width: none;
                margin: 0;
                padding: 0;
            }
        }

        @page {
            margin: 2cm;
            size: {{ $template->paper_size ?? 'A4' }} {{ $template->orientation ?? 'portrait' }};
        }
    </style>
</head>
<body>
    <div class="report-container">
        <!-- Header -->
        <div class="report-header">
            <h1 class="report-title">{{ $report->title }}</h1>
            <p class="report-subtitle">{{ $template->name }}</p>
            <p class="report-subtitle">{{ now()->format('Y/m/d H:i') }}</p>
        </div>

        <!-- Content based on template structure -->
        <div class="report-content">
            @foreach($structure['sections'] ?? [] as $section)
                <div class="section" style="margin-bottom: 30px;">
                    @if(isset($section['title']))
                        <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 15px; color: #1e40af;">
                            {{ $section['title'] }}
                        </h2>
                    @endif

                    @if($section['type'] === 'fields')
                        <div class="{{ $section['layout'] === 'two-column' ? 'two-column' : ($section['layout'] === 'three-column' ? 'three-column' : '') }}">
                            @foreach($section['fields'] as $field)
                                <div class="field-group">
                                    <label class="field-label">{{ $field['label'] }}</label>
                                    <div class="field-value">
                                        {{ $data[$field['key']] ?? $field['default'] ?? '' }}
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif

                    @if($section['type'] === 'images' && !empty($images))
                        <div class="images-grid">
                            @foreach(array_slice($images, 0, $template->image_slots) as $index => $image)
                                <div class="image-container">
                                    <img src="{{ Storage::url($image) }}" alt="صورة {{ $index + 1 }}">
                                    <p class="image-caption">صورة {{ $index + 1 }}</p>
                                </div>
                            @endforeach
                        </div>
                    @endif

                    @if($section['type'] === 'text' && isset($section['content']))
                        <div style="margin: 15px 0;">
                            {!! nl2br(e($section['content'])) !!}
                        </div>
                    @endif
                </div>
            @endforeach
        </div>

        <!-- Barcode -->
        @if($template->has_barcode && $barcode)
            <div class="barcode-container">
                <img src="{{ $barcode }}" alt="Barcode">
                <p style="margin-top: 10px; font-size: 12px;">{{ $report->barcode_data }}</p>
            </div>
        @endif

        <!-- Footer -->
        <div class="report-footer">
            <p>تم إنشاء هذا التقرير بواسطة منصة EduForms</p>
            <p>{{ now()->format('Y/m/d H:i:s') }}</p>
        </div>
    </div>
</body>
</html>