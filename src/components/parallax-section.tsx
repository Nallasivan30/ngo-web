"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage?: string
  overlay?: boolean
  className?: string
}

export const ParallaxSection = ({ children, bgImage, overlay = true, className = "" }: ParallaxSectionProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
          {overlay && <div className="absolute inset-0 bg-black/50" />}
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  )
}

