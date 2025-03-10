"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface AnimatedCardProps {
  header?: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  delay?: number
  className?: string
}

export const AnimatedCard = ({ header, content, footer, delay = 0, className = "" }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`card-hover ${className}`}
    >
      <Card className="h-full">
        {header && <CardHeader>{header}</CardHeader>}
        <CardContent>{content}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </motion.div>
  )
}

