'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  _id: string
  customerName: string
  review: string
  rating: number
  image?: {
    url: string
    alt: string
  }
  featured: boolean
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials?featured=true&limit=6')
        const data = await response.json()
        setTestimonials(data.testimonials || [])
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

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
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-wood-600 text-lg">
              Real feedback from satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white h-48 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-wood-50">
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
            What Our Customers Say
          </h2>
          <p className="text-wood-600 text-lg max-w-2xl mx-auto">
            Real feedback from satisfied customers who love our handcrafted furniture
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-wood-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {testimonial.image ? (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image.url}
                          alt={testimonial.image.alt || testimonial.customerName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-wood-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-wood-600 font-semibold text-lg">
                          {testimonial.customerName.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-wood-900">
                        {testimonial.customerName}
                      </h4>
                      <div className="flex items-center mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-wood-300" />
                    <p className="text-wood-700 text-sm leading-relaxed pl-4">
                      "{testimonial.review}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fallback content if no testimonials */}
        {testimonials.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-wood-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-wood-600" />
              </div>
              <h3 className="text-xl font-semibold text-wood-900 mb-2">
                Be the First to Review
              </h3>
              <p className="text-wood-600">
                Purchase our furniture and share your experience with us!
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsSection 