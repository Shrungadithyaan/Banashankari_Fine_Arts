import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'

export const metadata = {
  title: 'About Us - Banashankari Fine Arts',
  description: 'Learn about Vignesh Acharya and the legacy of Banashankari Fine Arts, specializing in handcrafted wooden furniture in Sringeri, Karnataka.',
  keywords: 'Vignesh Acharya, Banashankari Fine Arts, wooden furniture, Sringeri, Karnataka, handcrafted furniture, CNC wood carving',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-wood-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-wood-100 to-wood-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-wood-900 mb-6">
                About Banashankari Fine Arts
              </h1>
              <p className="text-xl text-wood-700 max-w-3xl mx-auto">
                Crafting excellence in wood for over 15 years, bringing timeless beauty to your home
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-wood-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-wood-700 leading-relaxed">
                  <p>
                    Founded in 2008 by Vignesh Acharya, Banashankari Fine Arts began as a small workshop 
                    in Sringeri, Karnataka, with a simple mission: to create beautiful, handcrafted wooden 
                    furniture that would stand the test of time.
                  </p>
                  <p>
                    What started as a passion for woodworking has grown into a respected name in custom 
                    furniture design, serving customers across Karnataka and beyond. Our commitment to 
                    quality craftsmanship and attention to detail has remained unchanged throughout our journey.
                  </p>
                  <p>
                    Today, we specialize in CNC wood carving and custom furniture designs, bringing our 
                    clients' visions to life with precision and care. Every piece we create tells a story 
                    of tradition, innovation, and timeless beauty.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-wood-200 h-96 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-wood-700">
                    <div className="w-32 h-32 bg-wood-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-4xl font-bold">V</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Vignesh Acharya</h3>
                    <p className="text-lg">Founder & Master Craftsman</p>
                    <p className="text-sm mt-2">15+ Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-wood-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-wood-900 mb-4">
                Our Values
              </h2>
              <p className="text-wood-600 text-lg">
                The principles that guide our craftsmanship
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-wood-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">Q</span>
                </div>
                <h3 className="text-xl font-semibold text-wood-900 mb-3">Quality</h3>
                <p className="text-wood-600">
                  We never compromise on quality. Every piece is crafted with the finest materials and 
                  attention to detail, ensuring it lasts for generations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-wood-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">C</span>
                </div>
                <h3 className="text-xl font-semibold text-wood-900 mb-3">Craftsmanship</h3>
                <p className="text-wood-600">
                  Our skilled artisans combine traditional techniques with modern technology to create 
                  furniture that is both beautiful and functional.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-wood-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold text-wood-900 mb-3">Innovation</h3>
                <p className="text-wood-600">
                  We embrace new technologies like CNC wood carving while preserving the artistry of 
                  handcrafted furniture making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-wood-900 mb-4">
                Our Process
              </h2>
              <p className="text-wood-600 text-lg">
                From concept to creation, how we bring your vision to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-wood-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-wood-900 mb-2">Consultation</h3>
                <p className="text-wood-600 text-sm">
                  We discuss your needs, preferences, and vision for the perfect piece.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-wood-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-wood-900 mb-2">Design</h3>
                <p className="text-wood-600 text-sm">
                  Our team creates detailed designs and plans for your custom furniture.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-wood-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-wood-900 mb-2">Crafting</h3>
                <p className="text-wood-600 text-sm">
                  Skilled artisans carefully craft your piece using traditional and modern techniques.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-wood-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-wood-900 mb-2">Delivery</h3>
                <p className="text-wood-600 text-sm">
                  We ensure safe delivery and installation of your beautiful new furniture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-wood-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-wood-200 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your custom furniture needs and bring your vision to life with our 
              expert craftsmanship and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8618121935"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Us Now
              </a>
              <a 
                href="https://wa.me/8618121935"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
} 