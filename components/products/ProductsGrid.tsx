'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Search, Filter } from 'lucide-react'
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
  inStock: boolean
}

interface ProductsGridProps {
  category?: string
  search?: string
}

const ProductsGrid = ({ category, search }: ProductsGridProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState(search || '')
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')

  const categories = [
    'all',
    'Chairs',
    'Tables',
    'Beds',
    'Cabinets',
    'Sofas',
    'Dining Sets',
    'Office Furniture',
    'Custom Pieces',
    'Other'
  ]

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '12'
      })

      if (selectedCategory !== 'all') {
        params.append('category', selectedCategory)
      }

      if (searchTerm) {
        params.append('search', searchTerm)
      }

      const response = await fetch(`/api/products?${params}`)
      const data = await response.json()
      
      setProducts(data.products || [])
      setTotalPages(data.pagination?.totalPages || 1)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [currentPage, selectedCategory, searchTerm])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-wood-300'
        }`}
      />
    ))
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-wood-200 h-64 rounded-lg mb-4"></div>
              <div className="h-4 bg-wood-200 rounded mb-2"></div>
              <div className="h-3 bg-wood-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-wood-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-wood-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-wood-600" />
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="px-3 py-2 border border-wood-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    {!product.inStock && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Out of Stock
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
                      disabled={!product.inStock}
                    >
                      <Link href={`/products/${product._id}`}>
                        {product.inStock ? 'View Details' : 'Out of Stock'}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="border-wood-600 text-wood-700 hover:bg-wood-50"
              >
                Previous
              </Button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "rustic" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "" : "border-wood-600 text-wood-700 hover:bg-wood-50"}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="border-wood-600 text-wood-700 hover:bg-wood-50"
              >
                Next
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-wood-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-wood-600" />
          </div>
          <h3 className="text-xl font-semibold text-wood-900 mb-2">
            No products found
          </h3>
          <p className="text-wood-600">
            Try adjusting your search criteria or browse all categories.
          </p>
        </div>
      )}
    </div>
  )
}

export default ProductsGrid 