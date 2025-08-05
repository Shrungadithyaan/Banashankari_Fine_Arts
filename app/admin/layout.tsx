import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { LogOut, Settings, Package, Users, MessageSquare, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SignedIn>
      <div className="min-h-screen bg-wood-50">
        {/* Admin Header */}
        <header className="bg-white border-b border-wood-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Link href="/admin" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-wood-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-xl font-bold text-wood-900">Admin Dashboard</span>
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-wood-600 hover:text-wood-900 text-sm">
                  View Site
                </Link>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r border-wood-200 min-h-screen">
            <nav className="p-4 space-y-2">
              <Link href="/admin">
                <Button variant="ghost" className="w-full justify-start text-wood-700 hover:bg-wood-50">
                  <BarChart3 className="w-4 h-4 mr-3" />
                  Dashboard
                </Button>
              </Link>
              
              <Link href="/admin/products">
                <Button variant="ghost" className="w-full justify-start text-wood-700 hover:bg-wood-50">
                  <Package className="w-4 h-4 mr-3" />
                  Products
                </Button>
              </Link>
              
              <Link href="/admin/testimonials">
                <Button variant="ghost" className="w-full justify-start text-wood-700 hover:bg-wood-50">
                  <MessageSquare className="w-4 h-4 mr-3" />
                  Testimonials
                </Button>
              </Link>
              
              <Link href="/admin/users">
                <Button variant="ghost" className="w-full justify-start text-wood-700 hover:bg-wood-50">
                  <Users className="w-4 h-4 mr-3" />
                  Users
                </Button>
              </Link>
              
              <Link href="/admin/settings">
                <Button variant="ghost" className="w-full justify-start text-wood-700 hover:bg-wood-50">
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Button>
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    </SignedIn>
  )
} 