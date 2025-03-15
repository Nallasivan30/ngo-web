"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface YouTubeVideoProps {
  videoId: string
  title?: string
  className?: string
}

export const YouTubeVideo = ({ videoId, title, className = "" }: YouTubeVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Loading Spinner */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-secondary flex items-center justify-center"
        >
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      )}

      {/* YouTube Iframe */}
      <motion.iframe
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => setIsLoaded(true)}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video"
      />
    </div>
  )
}