<?php

namespace Tests\Feature;

use App\Models\Template;
use App\Models\User;
use App\Models\UserReport;
use App\Services\ExportService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExportTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_export_report_to_pdf()
    {
        $user = User::factory()->create();
        $template = Template::factory()->create();
        $report = UserReport::factory()->create([
            'user_id' => $user->id,
            'template_id' => $template->id,
        ]);

        $response = $this->actingAs($user)->post("/reports/{$report->id}/export/pdf");

        $response->assertJson(['success' => true]);
        $this->assertDatabaseHas('user_reports', [
            'id' => $report->id,
            'export_count' => 1,
        ]);
    }

    public function test_export_service_generates_correct_html()
    {
        $template = Template::factory()->create([
            'structure' => [
                'sections' => [
                    [
                        'type' => 'fields',
                        'title' => 'Student Information',
                        'fields' => [
                            ['key' => 'student_name', 'label' => 'Student Name'],
                            ['key' => 'grade', 'label' => 'Grade'],
                        ],
                    ],
                ],
            ],
        ]);

        $report = UserReport::factory()->create([
            'template_id' => $template->id,
            'data' => [
                'student_name' => 'Ahmed Ali',
                'grade' => 'A+',
            ],
        ]);

        $exportService = new ExportService();
        $reflection = new \ReflectionClass($exportService);
        $method = $reflection->getMethod('generateHtml');
        $method->setAccessible(true);

        $html = $method->invoke($exportService, $report, []);

        $this->assertStringContainsString('Ahmed Ali', $html);
        $this->assertStringContainsString('A+', $html);
        $this->assertStringContainsString('Student Information', $html);
    }
}