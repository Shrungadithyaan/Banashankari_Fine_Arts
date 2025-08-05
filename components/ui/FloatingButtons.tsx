'use client'

import { Button } from '@/components/ui/button'
import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const FloatingButtons = () => {
  const contactInfo = {
    phone: '8618121935',
    whatsapp: '8618121935',
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          variant="whatsapp"
          size="lg"
          asChild
          className="floating-button rounded-full w-14 h-14 p-0 shadow-lg"
        >
          <a 
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in your wooden furniture. Can you provide more details?`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </Button>
      </motion.div>

      {/* Call Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          variant="call"
          size="lg"
          asChild
          className="floating-button rounded-full w-14 h-14 p-0 shadow-lg"
        >
          <a 
            href={`tel:${contactInfo.phone}`}
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
}

export default FloatingButtons 