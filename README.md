# Banashankari Fine Arts - Handcrafted Wooden Furniture Website

A beautiful, modern, and fully functional website for Banashankari Fine Arts, a handcrafted wooden furniture business in Sringeri, Karnataka, India.

## 🌟 Features

### Public Features
- **Responsive Design**: Mobile-first design with beautiful rustic wooden aesthetic
- **Product Showcase**: Dynamic product grid with filtering and search
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Contact Integration**: WhatsApp, phone, and email contact buttons
- **Google Maps**: Embedded location map
- **Testimonials**: Customer reviews and ratings
- **Fast Performance**: Optimized images and loading states

### Admin Features
- **Secure Authentication**: Clerk-based admin login
- **Product Management**: Full CRUD operations for products
- **Image Upload**: Cloudinary integration with drag-and-drop
- **User Management**: Admin user management (coming soon)
- **Testimonials**: Manage customer reviews
- **Dashboard**: Statistics and quick actions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + ShadCN UI
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas
- **Authentication**: Clerk
- **Image Storage**: Cloudinary
- **Deployment**: Vercel
- **Animations**: Framer Motion

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account
- Clerk account
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd banashankari-fine-arts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=
   CLOUDINARY_URL=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_SITE_URL=http://localhost:3001
   NEXT_PUBLIC_SITE_NAME=Banashankari Fine Arts
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

```
banashankari-fine-arts/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   ├── layout/           # Layout components
│   ├── home/             # Homepage components
│   └── products/         # Product components
├── lib/                  # Utility functions
│   ├── db.ts            # Database connection
│   ├── models/          # MongoDB models
│   └── utils.ts         # Helper functions
├── middleware.ts         # Clerk middleware
└── package.json         # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Wood**: `#8B4513` (Saddle Brown)
- **Light Wood**: `#D2B48C` (Tan)
- **Dark Wood**: `#654321` (Dark Brown)
- **Accent**: `#D47D3A` (Rustic Orange)
- **Background**: `#FDF8F3` (Cream)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, wood-colored
- **Body**: Regular, readable

### Components
- **Cards**: Hover effects with wood texture
- **Buttons**: Rustic styling with gradients
- **Forms**: Clean, accessible design
- **Navigation**: Sticky header with mobile menu

## 🔧 Configuration

### Clerk Authentication
1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable and secret keys
4. Update the environment variables

### MongoDB Atlas
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URI` environment variable

### Cloudinary
1. Create a Cloudinary account
2. Get your cloud name, API key, and secret
3. Update the Cloudinary configuration

## 📱 Pages

### Public Pages
- **Homepage**: Hero section, featured products, testimonials
- **Products**: Grid view with filtering and search
- **Product Detail**: Individual product with images and details
- **About**: Company information and story
- **Contact**: Contact form and map

### Admin Pages
- **Dashboard**: Overview and statistics
- **Products**: Manage product listings
- **Testimonials**: Manage customer reviews
- **Users**: User management (coming soon)
- **Settings**: Site configuration

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
```env
MONGODB_URI=your-production-mongodb-uri
CLOUDINARY_URL=your-cloudinary-url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Banashankari Fine Arts
```

## 🔒 Security

- **Authentication**: Clerk handles all auth securely
- **API Protection**: Admin routes protected by middleware
- **Input Validation**: All user inputs sanitized
- **Environment Variables**: Secrets stored securely
- **HTTPS**: Automatic SSL in production

## 📊 Performance

- **Image Optimization**: Next.js Image component with Cloudinary
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Static generation where possible
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Analysis**: Optimized bundle sizes

## 🧪 Testing

### Manual Testing Checklist
- [ ] Admin login/logout
- [ ] Add/Edit/Delete products
- [ ] Image upload functionality
- [ ] Product display on homepage
- [ ] Search and filtering
- [ ] Contact form submission
- [ ] WhatsApp and phone buttons
- [ ] Mobile responsiveness
- [ ] SEO meta tags
- [ ] Google Maps integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- **Email**: vigneshacharya007@gmail.com
- **Phone**: 8618121935 / 9480793528
- **Address**: Sringeri, Karnataka, India

## 🙏 Acknowledgments

- **Vignesh Acharya**: Founder and master craftsman
- **Banashankari Fine Arts**: The business and its legacy
- **Next.js Team**: Amazing framework
- **Tailwind CSS**: Beautiful styling system
- **ShadCN UI**: Excellent component library

---

**Built with ❤️ for Banashankari Fine Arts** 