"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useParallax } from "../../hooks/usageParallax"

interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  rotate?: boolean
  scale?: boolean
  opacity?: boolean
  offset?: number
}

export default function ParallaxContainer({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  rotate = false,
  scale = false,
  opacity = false,
  offset = 0,
}: ParallaxContainerProps) {
  const { ref, style } = useParallax({
    speed,
    direction,
    rotate,
    scale,
    opacity,
    offset,
  })

  return (
    <motion.div 
      ref={ref} 
      style={style} 
      className={`parallax-container ${className}`}
    >
      {children}
    </motion.div>
  )
}