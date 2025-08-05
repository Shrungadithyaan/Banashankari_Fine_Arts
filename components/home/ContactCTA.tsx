'use client'

import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ContactCTA = () => {
  const contactInfo = {
    phone: '8618121935',
    whatsapp: '8618121935',
    email: 'vigneshacharya007@gmail.com',
    address: 'Sringeri, Karnataka, India',
    coordinates: '13°25\'45.8"N 75°15\'01.2"E',
    hours: {
      weekdays: '9:00 AM - 7:00 PM',
      sunday: '10:00 AM - 5:00 PM'
    }
  }

  return (
    <section className="py-20 bg-wood-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-wood-200 text-lg leading-relaxed">
                Contact us today to discuss your custom furniture needs. Our team is ready to 
                bring your vision to life with our expert craftsmanship and attention to detail.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-wood-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-wood-200 text-sm">{contactInfo.phone}</p>
                    <p className="text-wood-200 text-sm">9480793528</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-wood-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-wood-200 text-sm hover:text-white transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-wood-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-wood-200 text-sm">{contactInfo.address}</p>
                    <p className="text-wood-300 text-xs">{contactInfo.coordinates}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-wood-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-wood-200 text-sm">Mon-Sat: {contactInfo.hours.weekdays}</p>
                    <p className="text-wood-200 text-sm">Sunday: {contactInfo.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="flex items-center space-x-2"
              >
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in your wooden furniture. Can you provide more details?`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
              </Button>
              <Button
                variant="call"
                size="lg"
                asChild
                className="flex items-center space-x-2"
              >
                <a href={`tel:${contactInfo.phone}`}>
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-wood-800 rounded-2xl overflow-hidden h-96">
              <iframe
                src="https://maps.app.goo.gl/zPwa5YgMzrweGXwM8"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Banashankari Fine Arts Location"
                className="opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
            
            {/* Map overlay info */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 text-wood-900">
              <h4 className="font-semibold text-sm">Banashankari Fine Arts</h4>
              <p className="text-xs text-wood-600">Sringeri, Karnataka</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA 