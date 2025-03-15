"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface PieChartProps {
  data: {
    label: string
    value: number
    color: string
  }[]
  title?: string
  className?: string
}

export const PieChart = ({ data, title, className = "" }: PieChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const size = Math.min(canvas.width, canvas.height)
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = size * 0.4

    // Calculate total value
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw pie chart
    let startAngle = 0
    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total

      ctx.fillStyle = item.color
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()
      ctx.fill()

      // Draw label
      const labelAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 0.7
      const labelX = centerX + Math.cos(labelAngle) * labelRadius
      const labelY = centerY + Math.sin(labelAngle) * labelRadius

      ctx.fillStyle = "#fff"
      ctx.font = "bold 12px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Only draw label if slice is big enough
      if (sliceAngle > 0.2) {
        ctx.fillText(`${Math.round((item.value / total) * 100)}%`, labelX, labelY)
      }

      startAngle += sliceAngle
    })

    // Draw center circle (optional for donut chart)
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--background")
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.5, 0, 2 * Math.PI)
    ctx.fill()
  }, [data])

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <canvas ref={canvasRef} width={300} height={300} className="max-w-full"></canvas>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

