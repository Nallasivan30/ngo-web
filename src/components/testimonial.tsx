"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/carousels"
import { ParallaxSection } from "@/components/parallax-section"

// Define the type for a testimonial
export type Testimonial = {
  quote: string
  author: string
  role: string
  image: string
}

// Define the props for the TestimonialsSection component
interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <ParallaxSection bgImage="/Community-Library.jpg" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Lives <span className="text-primary">Transformed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-sm md:text-base"
          >
            Hear from the individuals whose lives have been changed by our programs.
          </motion.p>
        </div>

        <Carousel
          items={testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <Card className="bg-background/10 backdrop-blur-md border-none glass text-white max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary-foreground">
                      <Image
                        src={testimonial.image || "/cnff.jpg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm md:text-xl mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-md text-gray-300">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        />
      </div>
    </ParallaxSection>
  )
}