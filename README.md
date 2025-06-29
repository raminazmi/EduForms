# EduForms - Educational Reports Platform

A comprehensive educational forms and reports platform built with Laravel, Inertia.js, and React.

## 🚀 Features

- **Bilingual Support**: Full Arabic and English support with RTL/LTR layouts
- **Template System**: Pre-built and customizable report templates
- **Subscription Management**: Multiple subscription plans with usage limits
- **Export Functionality**: PDF and PNG export capabilities
- **Payment Integration**: Stripe integration for subscription payments
- **Dark/Light Mode**: Theme switching with system preference detection
- **Responsive Design**: Mobile-first responsive design
- **Role-based Access**: Admin and user role management

## 🛠️ Tech Stack

- **Backend**: Laravel 12
- **Frontend**: React 18 with TypeScript
- **Bridge**: Inertia.js
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Database**: MySQL/PostgreSQL
- **Payment**: Stripe
- **PDF Generation**: DomPDF
- **Image Processing**: Intervention Image

## 📋 Prerequisites

- PHP 8.2+
- Node.js 18+
- Composer
- MySQL/PostgreSQL
- Redis (optional, for caching)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eduforms-app
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure environment variables**
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=eduforms
   DB_USERNAME=root
   DB_PASSWORD=

   STRIPE_KEY=your_stripe_publishable_key
   STRIPE_SECRET=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   ```

6. **Run migrations and seeders**
   ```bash
   php artisan migrate --seed
   ```

7. **Build assets**
   ```bash
   npm run build
   ```

8. **Start the development server**
   ```bash
   php artisan serve
   npm run dev
   ```

## 🗄️ Database Schema

### Core Tables

- **users**: User accounts with role-based access
- **subscription_plans**: Available subscription plans
- **user_subscriptions**: User subscription records
- **template_categories**: Template categorization
- **templates**: Report templates with structure
- **user_reports**: User-generated reports
- **payments**: Payment transaction records

### Key Relationships

- User → UserSubscription (1:many)
- SubscriptionPlan → UserSubscription (1:many)
- Template → UserReport (1:many)
- User → UserReport (1:many)
- TemplateCategory → Template (1:many)

## 🔐 Authentication & Authorization

### Roles
- **Admin**: Full system access
- **Teacher**: Template access and report creation
- **User**: Basic access

### Middleware
- `auth`: Authenticated users only
- `role:admin`: Admin users only
- `subscription`: Active subscription required

## 💳 Payment Integration

### Supported Payment Methods
- Visa
- Mastercard
- Mada
- Apple Pay

### Subscription Plans
- **Free**: Limited access
- **Monthly**: Full features for 1 month
- **Yearly**: Full features for 1 year with discount

## 📄 Export System

### Supported Formats
- **PDF**: High-quality document export
- **PNG**: Image export with fallback options

### Export Features
- Custom templates
- Barcode generation
- Image embedding
- Multi-language support

## 🌐 Internationalization

### Supported Languages
- Arabic (RTL)
- English (LTR)

### Translation Files
- `resources/lang/ar.json`
- `resources/lang/en.json`

## 🧪 Testing

Run the test suite:
```bash
php artisan test
```

### Test Coverage
- Authentication tests
- Subscription management tests
- Export functionality tests
- Payment integration tests

## 📚 API Documentation

### Authentication Endpoints
- `POST /login` - User login
- `POST /register` - User registration
- `POST /logout` - User logout

### Template Endpoints
- `GET /api/templates` - List templates
- `GET /api/templates/{id}` - Get template details
- `POST /api/templates/{id}/use` - Use template

### Report Endpoints
- `GET /api/reports` - List user reports
- `POST /api/reports` - Create report
- `PUT /api/reports/{id}` - Update report
- `DELETE /api/reports/{id}` - Delete report
- `POST /api/reports/{id}/export/{format}` - Export report

### Payment Endpoints
- `POST /api/payments/checkout` - Initialize payment
- `POST /api/payments/confirm` - Confirm payment
- `POST /api/webhooks/stripe` - Stripe webhook

## 🚀 Deployment

### Production Setup

1. **Server Requirements**
   - PHP 8.2+ with required extensions
   - Web server (Nginx/Apache)
   - Database server
   - Redis (recommended)

2. **Environment Configuration**
   ```env
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://your-domain.com
   ```

3. **Optimization Commands**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   npm run build
   ```

4. **Queue Setup**
   ```bash
   php artisan queue:work --daemon
   ```

### Docker Deployment

```dockerfile
FROM php:8.2-fpm

# Install dependencies and configure
# ... (Docker configuration)

COPY . /var/www/html
RUN composer install --no-dev --optimize-autoloader
RUN npm ci && npm run build
```

## 🔧 Configuration

### Key Configuration Files
- `config/app.php` - Application settings
- `config/services.php` - External service configuration
- `config/filesystems.php` - File storage configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.js` - Vite build configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: support@eduforms.com
- Documentation: [docs.eduforms.com](https://docs.eduforms.com)
- Issues: GitHub Issues

## 🔄 Changelog

### Version 1.0.0
- Initial release
- Core template system
- Subscription management
- Export functionality
- Payment integration
- Bilingual support