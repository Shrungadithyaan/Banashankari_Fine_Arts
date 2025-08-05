import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'
import ProductsGrid from '@/components/products/ProductsGrid'
import ProductsFilter from '@/components/products/ProductsFilter'

export const metadata = {
  title: 'Products - Banashankari Fine Arts',
  description: 'Browse our collection of handcrafted wooden furniture including chairs, tables, beds, cabinets, and custom pieces.',
  keywords: 'wooden furniture, chairs, tables, beds, cabinets, custom furniture, handcrafted furniture',
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-wood-900 mb-4">
              Our Products
            </h1>
            <p className="text-wood-600 text-lg max-w-2xl mx-auto">
              Discover our handcrafted wooden furniture collection, each piece crafted with precision and care
            </p>
          </div>

          {/* Filter and Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductsFilter />
            </div>
            <div className="lg:col-span-3">
              <Suspense fallback={<div>Loading products...</div>}>
                <ProductsGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
} 