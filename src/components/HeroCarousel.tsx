"use client"

import { useState, useEffect, SetStateAction } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const carouselImages = [
    { src: "/slide/1.jpg", alt: "About hero background 1" },
    { src: "/slide/2.jpg", alt: "About hero background 2" },
    { src: "/slide/3.jpg", alt: "About hero background 3" },
    { src: "/slide/4.jpg", alt: "About hero background 4" },
    { src: "/slide/5.jpg", alt: "About hero background 4" },
  ]

  useEffect(() => {
    // Auto-rotate slides when not hovering
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
      }, 3500)
      return () => clearInterval(interval)
    }
  }, [isHovering, carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index)
  }

  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Carousel Images */}
      {carouselImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image 
            src={image.src} 
            alt={image.alt} 
            fill 
            className="object-cover object-[50%_30%]" 
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Hero Content */}
      <div 
        className={`relative z-20 container mx-auto px-4 text-center text-primary-foreground transition-opacity duration-500 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          About Tarunya Foundation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-2xl mx-auto"
        >
          Empowering communities through education, healthcare, and sustainable development
        </motion.p>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-primary-foreground p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-primary-foreground p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-primary-foreground scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
