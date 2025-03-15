"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-ngo-dark">Our Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p className="text-muted-foreground">123 Alangularm, Tenkasi,12345</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">https://tarunyafoundation.org</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 aspect-video w-full rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.123456789012!2d77.5014595!3d8.8695511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042333971a42bd%3A0x1c1e07dfe8416d27!2sTarunya%20Foundation!5e0!3m2!1sen!2sin!4v169876543210!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 h-[460px]"
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
    </div>
  </section>
)