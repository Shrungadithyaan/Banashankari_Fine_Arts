'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-wood-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-wood-100 to-wood-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-wood-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-wood-700 max-w-3xl mx-auto">
                Get in touch with us to discuss your custom furniture needs or visit our workshop
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-wood-900 mb-6">
                  Send us a Message
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-wood-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-wood-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-wood-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-wood-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-wood-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-wood-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-wood-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 border border-wood-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                          placeholder="Tell us about your furniture needs..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        variant="rustic"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                      
                      {submitStatus === 'success' && (
                        <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm">
                          Thank you! Your message has been sent successfully.
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                          Sorry, there was an error sending your message. Please try again.
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-wood-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-wood-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-wood-900 mb-1">Phone Numbers</h3>
                          <p className="text-wood-600">8618121935</p>
                          <p className="text-wood-600">9480793528</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-wood-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-wood-900 mb-1">Email</h3>
                          <a 
                            href="mailto:vigneshacharya007@gmail.com"
                            className="text-wood-600 hover:text-wood-900 transition-colors"
                          >
                            vigneshacharya007@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-wood-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-wood-900 mb-1">Address</h3>
                          <p className="text-wood-600">Sringeri, Karnataka, India</p>
                          <p className="text-wood-500 text-sm">Coordinates: 13°25'45.8"N 75°15'01.2"E</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-wood-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-wood-900 mb-1">Business Hours</h3>
                          <p className="text-wood-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                          <p className="text-wood-600">Sunday: 10:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-wood-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-wood-900 mb-4">
                Visit Our Workshop
              </h2>
              <p className="text-wood-600 text-lg">
                Come see our craftsmanship in person
              </p>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://maps.app.goo.gl/zPwa5YgMzrweGXwM8"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Banashankari Fine Arts Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-20 bg-wood-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-wood-200 text-lg mb-8 max-w-2xl mx-auto">
              For urgent inquiries or to schedule a consultation, reach out to us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="call"
                size="lg"
                asChild
                className="flex items-center space-x-2"
              >
                <a href="tel:8618121935">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="flex items-center space-x-2"
              >
                <a 
                  href="https://wa.me/8618121935?text=Hi! I'm interested in your wooden furniture. Can you provide more details?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
} 