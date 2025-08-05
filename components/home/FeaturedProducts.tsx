'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { formatPrice, truncateText } from '@/lib/utils'

interface Product {
  _id: string
  title: string
  description: string
  category: string
  price?: number
  images: Array<{
    url: string
    alt: string
  }>
  featured: boolean
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('/api/products?featured=true&limit=6')
        const data = await response.json()
        setProducts(data.products || [])
      } catch (error) {
        console.error('Error fetching featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-900 mb-4">
              Featured Products
            </h2>
            <p className="text-wood-600 text-lg">
              Discover our handcrafted wooden furniture collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-wood-200 h-64 rounded-lg mb-4"></div>
                <div className="h-4 bg-wood-200 rounded mb-2"></div>
                <div className="h-3 bg-wood-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-wood-900 mb-4">
            Featured Products
          </h2>
          <p className="text-wood-600 text-lg max-w-2xl mx-auto">
            Discover our handcrafted wooden furniture collection, each piece crafted with precision and care
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0].url}
                      alt={product.images[0].alt || product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-wood-200 flex items-center justify-center">
                      <span className="text-wood-400">No Image</span>
                    </div>
                  )}
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-wood-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-wood-900">
                      {truncateText(product.title, 30)}
                    </CardTitle>
                    {product.price && (
                      <span className="text-wood-600 font-semibold">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-wood-500 capitalize">
                    {product.category}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-wood-600 text-sm mb-4">
                    {truncateText(product.description, 80)}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full border-wood-600 text-wood-700 hover:bg-wood-50"
                  >
                    <Link href={`/products/${product._id}`}>
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {products.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="rustic"
              size="lg"
              asChild
              className="group"
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProducts 