"use client"

import { useState, useEffect, useRef } from "react"

export default function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!ref.current) return

    const updateSize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect()
        setSize({ width, height })
      }
    }

    // Initial size measurement
    updateSize()

    // Set up resize observer to track size changes
    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(ref.current)

    // Clean up
    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current)
      }
      resizeObserver.disconnect()
    }
  }, [])

  return { ref, ...size }
}

