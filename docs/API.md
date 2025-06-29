# EduForms API Documentation

## Authentication

All API endpoints require authentication using Laravel Sanctum tokens.

### Headers
```
Authorization: Bearer {token}
Content-Type: application/json
Accept: application/json
```

## Endpoints

### Authentication

#### POST /api/login
Login user and get access token.

**Request:**
```json
{
    "email": "user@example.com",
    "password": "password"
}
```

**Response:**
```json
{
    "user": {
        "id": 1,
        "name": "User Name",
        "email": "user@example.com"
    },
    "token": "access_token_here"
}
```

### Templates

#### GET /api/templates
Get list of available templates.

**Query Parameters:**
- `category` (optional): Filter by category ID
- `premium` (optional): Filter by premium status (true/false)
- `search` (optional): Search by name or description

**Response:**
```json
{
    "data": [
        {
            "id": 1,
            "name": "Student Report",
            "description": "Basic student performance report",
            "category": {
                "id": 1,
                "name": "Academic Reports"
            },
            "is_premium": false,
            "image_slots": 2,
            "has_barcode": true
        }
    ],
    "meta": {
        "current_page": 1,
        "total": 10
    }
}
```

#### GET /api/templates/{id}
Get template details including structure.

**Response:**
```json
{
    "id": 1,
    "name": "Student Report",
    "structure": {
        "sections": [
            {
                "type": "fields",
                "title": "Student Information",
                "fields": [
                    {
                        "key": "student_name",
                        "label": "Student Name",
                        "type": "text",
                        "required": true
                    }
                ]
            }
        ]
    }
}
```

### Reports

#### GET /api/reports
Get user's reports.

**Query Parameters:**
- `status` (optional): Filter by status (draft/completed)
- `template_id` (optional): Filter by template
- `search` (optional): Search by title

**Response:**
```json
{
    "data": [
        {
            "id": 1,
            "title": "Ahmed's Report",
            "status": "completed",
            "template": {
                "id": 1,
                "name": "Student Report"
            },
            "created_at": "2024-01-01T00:00:00Z",
            "export_count": 3
        }
    ]
}
```

#### POST /api/reports
Create a new report.

**Request:**
```json
{
    "template_id": 1,
    "title": "Report Title",
    "data": {
        "student_name": "Ahmed Ali",
        "grade": "A+"
    },
    "images": ["image1.jpg", "image2.jpg"],
    "barcode_data": "12345"
}
```

#### PUT /api/reports/{id}
Update an existing report.

#### DELETE /api/reports/{id}
Delete a report.

#### POST /api/reports/{id}/export/{format}
Export report in specified format (pdf/png).

**Response:**
```json
{
    "success": true,
    "download_url": "https://example.com/exports/report.pdf",
    "filename": "report_2024-01-01.pdf"
}
```

### Subscriptions

#### GET /api/subscription-plans
Get available subscription plans.

#### POST /api/subscriptions/subscribe
Subscribe to a plan.

**Request:**
```json
{
    "plan_id": 1,
    "payment_method": "visa"
}
```

### Payments

#### POST /api/payments/checkout
Initialize payment for subscription.

**Request:**
```json
{
    "plan_id": 1,
    "payment_method": "visa"
}
```

**Response:**
```json
{
    "client_secret": "pi_xxx_secret_xxx",
    "payment_id": "pi_xxx"
}
```

## Error Responses

### 400 Bad Request
```json
{
    "message": "Validation failed",
    "errors": {
        "email": ["The email field is required."]
    }
}
```

### 401 Unauthorized
```json
{
    "message": "Unauthenticated"
}
```

### 403 Forbidden
```json
{
    "message": "This action is unauthorized"
}
```

### 404 Not Found
```json
{
    "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
    "message": "Internal server error"
}
```