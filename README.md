# EduForms - Educational Reports Platform

A comprehensive educational forms and reports platform built with React, TypeScript, and modern web technologies.

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

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Icons**: Lucide React + Heroicons

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eduforms-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🗄️ Data Structure

### Core Data Models

- **Users**: User accounts with role-based access
- **Subscription Plans**: Available subscription plans
- **User Subscriptions**: User subscription records
- **Template Categories**: Template categorization
- **Templates**: Report templates with structure
- **User Reports**: User-generated reports
- **Payments**: Payment transaction records

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

### Features
- JWT-based authentication
- Role-based route protection
- Persistent login state

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

### Translation System
- React-based translation hooks
- Dynamic language switching
- RTL/LTR layout support

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy to your hosting provider**
   - Upload the `dist` folder contents
   - Configure your web server to serve the static files
   - Set up proper routing for SPA

### Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_URL=https://your-api-url.com
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## 🔧 Configuration

### Key Configuration Files
- `vite.config.js` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration

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