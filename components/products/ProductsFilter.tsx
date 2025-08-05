'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Filter, X } from 'lucide-react'

interface ProductsFilterProps {
  onCategoryChange?: (category: string) => void
  onPriceRangeChange?: (min: number, max: number) => void
  onFeaturedChange?: (featured: boolean) => void
}

const ProductsFilter = ({ onCategoryChange, onPriceRangeChange, onFeaturedChange }: ProductsFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [featuredOnly, setFeaturedOnly] = useState(false)

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Chairs', label: 'Chairs' },
    { value: 'Tables', label: 'Tables' },
    { value: 'Beds', label: 'Beds' },
    { value: 'Cabinets', label: 'Cabinets' },
    { value: 'Sofas', label: 'Sofas' },
    { value: 'Dining Sets', label: 'Dining Sets' },
    { value: 'Office Furniture', label: 'Office Furniture' },
    { value: 'Custom Pieces', label: 'Custom Pieces' },
    { value: 'Other', label: 'Other' }
  ]

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  const handlePriceRangeChange = () => {
    const min = priceRange.min ? parseInt(priceRange.min) : 0
    const max = priceRange.max ? parseInt(priceRange.max) : 999999
    onPriceRangeChange?.(min, max)
  }

  const handleFeaturedChange = (featured: boolean) => {
    setFeaturedOnly(featured)
    onFeaturedChange?.(featured)
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setPriceRange({ min: '', max: '' })
    setFeaturedOnly(false)
    onCategoryChange?.('all')
    onPriceRangeChange?.(0, 999999)
    onFeaturedChange?.(false)
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div>
          <h4 className="font-semibold text-wood-900 mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.value}
                  checked={selectedCategory === category.value}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="text-wood-600 focus:ring-wood-500"
                />
                <span className="text-sm text-wood-700">{category.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="font-semibold text-wood-900 mb-3">Price Range</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-wood-600 mb-1">Min Price</label>
              <input
                type="number"
                placeholder="₹0"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                className="w-full px-3 py-2 border border-wood-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-wood-600 mb-1">Max Price</label>
              <input
                type="number"
                placeholder="₹999999"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                className="w-full px-3 py-2 border border-wood-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent text-sm"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePriceRangeChange}
              className="w-full border-wood-600 text-wood-700 hover:bg-wood-50"
            >
              Apply Price Filter
            </Button>
          </div>
        </div>

        {/* Featured Filter */}
        <div>
          <h4 className="font-semibold text-wood-900 mb-3">Featured</h4>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(e) => handleFeaturedChange(e.target.checked)}
              className="text-wood-600 focus:ring-wood-500"
            />
            <span className="text-sm text-wood-700">Featured Products Only</span>
          </label>
        </div>

        {/* Clear Filters */}
        <Button
          variant="outline"
          size="sm"
          onClick={clearFilters}
          className="w-full border-wood-600 text-wood-700 hover:bg-wood-50"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductsFilter 