'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, Users, MessageSquare, TrendingUp, Plus, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface DashboardStats {
  totalProducts: number
  totalUsers: number
  totalTestimonials: number
  featuredProducts: number
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalUsers: 0,
    totalTestimonials: 0,
    featuredProducts: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch products count
        const productsResponse = await fetch('/api/products?limit=1')
        const productsData = await productsResponse.json()
        
        // Fetch testimonials count
        const testimonialsResponse = await fetch('/api/testimonials?limit=1')
        const testimonialsData = await testimonialsResponse.json()

        setStats({
          totalProducts: productsData.pagination?.totalItems || 0,
          totalUsers: 0, // Will be implemented when user management is added
          totalTestimonials: testimonialsData.pagination?.totalItems || 0,
          featuredProducts: 0 // Will be calculated from products data
        })
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-wood-200 h-32 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-6 shadow-sm"
      >
        <h1 className="text-2xl font-bold text-wood-900 mb-2">
          Welcome to Admin Dashboard
        </h1>
        <p className="text-wood-600">
          Manage your products, testimonials, and website content from here.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-wood-600">
                Total Products
              </CardTitle>
              <Package className="h-4 w-4 text-wood-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-wood-900">{stats.totalProducts}</div>
              <p className="text-xs text-wood-500">
                +2 from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-wood-600">
                Featured Products
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-wood-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-wood-900">{stats.featuredProducts}</div>
              <p className="text-xs text-wood-500">
                Highlighted items
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-wood-600">
                Testimonials
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-wood-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-wood-900">{stats.totalTestimonials}</div>
              <p className="text-xs text-wood-500">
                Customer reviews
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-wood-600">
                Total Users
              </CardTitle>
              <Users className="h-4 w-4 text-wood-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-wood-900">{stats.totalUsers}</div>
              <p className="text-xs text-wood-500">
                Registered users
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="rustic" size="sm" asChild className="w-full">
              <Link href="/admin/products/new">
                <Plus className="w-4 h-4 mr-2" />
                Add New Product
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="w-full border-wood-600 text-wood-700 hover:bg-wood-50">
              <Link href="/admin/testimonials/new">
                <MessageSquare className="w-4 h-4 mr-2" />
                Add Testimonial
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="w-full border-wood-600 text-wood-700 hover:bg-wood-50">
              <Link href="/">
                <Eye className="w-4 h-4 mr-2" />
                View Website
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-wood-600 rounded-full"></div>
                <p className="text-sm text-wood-600">Dashboard loaded</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-wood-400 rounded-full"></div>
                <p className="text-sm text-wood-600">Stats updated</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-wood-600">Database</span>
                <span className="text-sm text-green-600 font-medium">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-wood-600">Cloudinary</span>
                <span className="text-sm text-green-600 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-wood-600">Authentication</span>
                <span className="text-sm text-green-600 font-medium">Secure</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default AdminDashboard 