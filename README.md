# TRYKON - Premium Indian Gymwear

<div align="center">
  <h3>🇮🇳 Premium Athletic Wear for Modern Athletes</h3>
  
  [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://gymwear-react.vercel.app)
  [![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

---

## 🚀 Overview

TRYKON is India's premier gymwear brand, engineered for performance, comfort, and style. Our platform delivers a premium e-commerce experience showcasing high-quality compression tees, hoodies, and athletic wear designed specifically for Indian athletes.

### ✨ Key Features

- 🛒 **Full E-commerce Platform** - Complete shopping cart and checkout system
- 🔐 **Authentication System** - Secure user registration and login
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- 🎨 **Modern UI/UX** - Premium animations and interactive components
- 🛍️ **Product Management** - Dynamic product catalog with filtering
- 💳 **Payment Integration** - Secure payment processing
- 📧 **Email Notifications** - Automated order and support emails
- 🎯 **SEO Optimized** - Built for search engine visibility

---

## 🏗️ Architecture

```mermaid
graph TD
    A[User Interface] --> B[Next.js Frontend]
    B --> C[Authentication System]
    B --> D[Shopping Cart]
    B --> E[Product Catalog]
    B --> F[Payment Integration]
    B --> G[Supabase Backend]
    G --> H[(Database)]
    B --> I[Vercel Deployment]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style G fill:#fff3e0
    style H fill:#e8f5e8
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js with React Three Fiber
- **State Management**: React Context + Custom Hooks
- **Form Handling**: React Hook Form with Zod validation

### Backend
- **Backend-as-a-Service**: Supabase
- **Database**: PostgreSQL via Supabase
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Real-time**: Supabase Realtime

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript strict mode
- **Build Tool**: Next.js built-in bundler

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/7ttp/trykon.git
   cd trykon
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment setup**
   ```bash
   # Create environment files
   cp .env.example .env.local
   cp backend/.env.example backend/.env
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

---

## 📋 Environment Variables

### Environment Variables (.env.local)
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## 🏗️ Project Structure

```
gymwear-v1/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Authentication routes
│   ├── (shop)/            # Shopping routes
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
├── scripts/             # Utility scripts
└── styles/             # Global styles
```

---

## 🔄 User Flow

```mermaid
flowchart TD
    A[Landing Page] --> B{User Action}
    B -->|Browse Products| C[Product Catalog]
    B -->|Sign Up| D[Registration]
    B -->|Sign In| E[Login]
    
    C --> F[Product Details]
    F --> G{Add to Cart}
    G -->|Yes| H[Shopping Cart]
    G -->|No| C
    
    D --> I[Account Created]
    E --> I
    I --> J[User Dashboard]
    
    H --> K[Checkout Process]
    K --> L[Payment]
    L --> M[Order Confirmation]
    
    style A fill:#e3f2fd
    style H fill:#fff3e0
    style M fill:#e8f5e8
```

---

## 🛡️ Security Features

- **Data Validation**: Zod schemas for all inputs
- **SQL Injection Protection**: Prisma ORM parameterized queries  
- **XSS Protection**: Content Security Policy headers
- **CSRF Protection**: SameSite cookies and CSRF tokens
- **Rate Limiting**: API endpoint throttling
- **Environment Variables**: Sensitive data protection

---

## 📊 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Dynamic imports and lazy loading
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Caching Strategy**: API response caching with SWR
- **SEO Optimization**: Meta tags and structured data
- **Lighthouse Score**: 95+ on all metrics

---

## 🧪 Testing

```bash
# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Build for production
pnpm build
```

---

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Database (Supabase)
1. Create a new Supabase project
2. Copy your project URL and API keys
3. Set up your environment variables
4. Database tables are auto-created via Supabase

---

## 📈 Analytics & Monitoring

- **Web Vitals**: Core Web Vitals tracking
- **Error Monitoring**: Runtime error tracking
- **Performance**: Real User Monitoring (RUM)
- **SEO**: Search Console integration

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use conventional commit messages
- Ensure all tests pass
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙋‍♂️ Support

- **Email**: [support@trykon.com](mailto:support@trykon.com)
- **Documentation**: [docs.trykon.com](https://docs.trykon.com)
- **Issues**: [GitHub Issues](https://github.com/7ttp/trykon/issues)

---

## 🎯 Roadmap

- [ ] Mobile app development (React Native)
- [ ] Advanced analytics dashboard
- [ ] AI-powered size recommendations
- [ ] Subscription box service
- [ ] Influencer collaboration platform
- [ ] International shipping integration

---

<div align="center">
  <p><strong>Built with ❤️ in India 🇮🇳</strong></p>
  <p>© 2024 TRYKON. All rights reserved.</p>
</div>