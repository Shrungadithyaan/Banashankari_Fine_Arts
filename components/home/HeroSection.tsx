'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 rustic-gradient opacity-90"></div>
      <div className="absolute inset-0 wood-texture opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-wood-600 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            <Award className="w-4 h-4" />
            <span>Premium Handcrafted Furniture</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-wood-900 text-shadow"
          >
            <span className="block">Banashankari</span>
            <span className="block text-wood-700">Fine Arts</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-wood-700 max-w-3xl mx-auto leading-relaxed"
          >
            Premium handcrafted wooden furniture by Vignesh Acharya. 
            Specializing in CNC wood carving and custom furniture designs in Sringeri, Karnataka.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-wood-700"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-wood-600" />
              <span className="font-semibold">500+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-wood-600" />
              <span className="font-semibold">15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-wood-600" />
              <span className="font-semibold">1000+ Projects</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="rustic"
              size="lg"
              asChild
              className="group"
            >
              <Link href="/products">
                Explore Our Products
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
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-wood-300 rounded-full opacity-30"
        ></motion.div>
      </div>
      <div className="absolute top-20 right-20 hidden lg:block">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-2 border-wood-400 rounded-full opacity-40"
        ></motion.div>
      </div>
    </section>
  )
}

export default HeroSection 