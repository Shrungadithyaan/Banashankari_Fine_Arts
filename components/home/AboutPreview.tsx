'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-wood-100 text-wood-700 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Established 2008</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-wood-900">
              Crafting Excellence in Wood for Over 15 Years
            </h2>
            
            <p className="text-wood-600 text-lg leading-relaxed">
              Banashankari Fine Arts, founded by Vignesh Acharya, has been at the forefront of 
              handcrafted wooden furniture in Sringeri, Karnataka. Our passion for woodworking 
              and commitment to quality has made us a trusted name in custom furniture design.
            </p>
            
            <p className="text-wood-600 text-lg leading-relaxed">
              We specialize in CNC wood carving and custom furniture designs, bringing your 
              vision to life with precision craftsmanship and attention to detail. Every piece 
              tells a story of tradition, innovation, and timeless beauty.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-wood-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-wood-900">500+</p>
                  <p className="text-wood-600 text-sm">Happy Customers</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-wood-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-wood-900">15+</p>
                  <p className="text-wood-600 text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                variant="rustic"
                size="lg"
                asChild
                className="group"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-wood-600 text-wood-700 hover:bg-wood-50"
              >
                <Link href="/contact">
                  Get Custom Quote
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-wood-200 to-wood-300 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-wood-400/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-wood-700">
                  <div className="w-24 h-24 bg-wood-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vignesh Acharya</h3>
                  <p className="text-sm">Founder & Master Craftsman</p>
                  <div className="flex items-center justify-center mt-4 space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Sringeri, Karnataka</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-wood-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-wood-300 rounded-full opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview 