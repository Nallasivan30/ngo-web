"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useScroll } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface AutoScrollCardsProps {
  items: {
    title: string
    description: string
  }[]
}

export const AutoScrollCards: React.FC<AutoScrollCardsProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  useEffect(() => {
    const animateCards = async () => {
      await controls.start((i) => ({
        x: ["100%", "-100%"],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
            delay: i * 5,
          },
        },
      }))
    }

    animateCards()
  }, [controls])

  return (
    <div ref={containerRef} className="overflow-hidden py-10">
      <div className="flex space-x-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            animate={controls}
            style={{ x: "100%" }}
            className="flex-shrink-0 w-64"
          >
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

