"use client"

import { useEffect, useRef, useState } from "react"
import { useViewportScroll, useTransform, useSpring } from "framer-motion"

interface UseParallaxOptions {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  rotate?: boolean
  scale?: boolean
  opacity?: boolean
  offset?: number
}

export function useParallax({
  speed = 0.5,
  direction = "up",
  rotate = false,
  scale = false,
  opacity = false,
  offset = 0,
}: UseParallaxOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useViewportScroll()
  const [elementTop, setElementTop] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updateElementInfo = () => {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setElementTop(rect.top + scrollTop)
      setElementHeight(rect.height)
    }

    updateElementInfo()
    window.addEventListener('resize', updateElementInfo)
    return () => window.removeEventListener('resize', updateElementInfo)
  }, [])

  // Calculate parallax ranges
  const yRange = [-200 * speed + offset, 200 * speed + offset]
  const xRange = [-200 * speed + offset, 200 * speed + offset]
  const rotateRange = [0, 360 * speed]
  const scaleRange = [1, 1 + speed * 0.5]
  const opacityRange = [0, 1, 0]

  // Create transforms based on scroll position
  const y = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight],
    direction === "up" || direction === "down" ? yRange : [0, 0]
  )
  
  const x = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight],
    direction === "left" || direction === "right" ? xRange : [0, 0]
  )
  
  const rotateValue = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight],
    rotate ? rotateRange : [0, 0]
  )
  
  const scaleValue = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight],
    scale ? scaleRange : [1, 1]
  )
  
  const opacityValue = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop, elementTop + elementHeight],
    opacity ? opacityRange : [1, 1, 1]
  )

  // Add spring physics for smoother animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const springY = useSpring(y, springConfig)
  const springX = useSpring(x, springConfig)
  const springRotate = useSpring(rotateValue, springConfig)
  const springScale = useSpring(scaleValue, springConfig)
  const springOpacity = useSpring(opacityValue, springConfig)

  return {
    ref,
    style: {
      y: direction === "up" || direction === "down" ? springY : 0,
      x: direction === "left" || direction === "right" ? springX : 0,
      rotate: rotate ? springRotate : 0,
      scale: scale ? springScale : 1,
      opacity: opacity ? springOpacity : 1,
    },
  }
}

export function useScrollVelocity() {
  const { scrollY } = useViewportScroll()
  const [velocity, setVelocity] = useState(0)
  const lastScrollY = useRef(0)
  const lastTime = useRef(Date.now())

  useEffect(() => {
    const updateVelocity = () => {
      const currentTime = Date.now()
      const currentScrollY = scrollY.get()
      const deltaTime = currentTime - lastTime.current
      const deltaScrollY = currentScrollY - lastScrollY.current

      if (deltaTime > 0) {
        const currentVelocity = deltaScrollY / deltaTime
        setVelocity(currentVelocity)
      }

      lastScrollY.current = currentScrollY
      lastTime.current = currentTime
    }

    const unsubscribe = scrollY.onChange(updateVelocity)
    return unsubscribe
  }, [scrollY])

  return velocity
}