"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import RootLayout from "@/components/layout"

export default function Contact() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-ngo-dark text-ngo-light">
      <HeroSection />
      <ContactForm />
    </div>
    </RootLayout>
  )
}

const HeroSection = () => (
  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient">
    <div className="relative z-10 text-center">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-shadow"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-shadow"
      >
        Get in touch with our team
      </motion.p>
    </div>
  </section>
)

const ContactForm = () => (
  <section className="py-20 bg-ngo-light">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-ngo-dark text-center">Send us a message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" rows={5} required />
          </div>
          <Button type="submit" className="w-full bg-ngo-accent hover:bg-ngo-accent-dark text-ngo-dark font-bold">
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  </section>
)

