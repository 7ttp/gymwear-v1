"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0)

  const handleComplete = useCallback(() => {
    setTimeout(onComplete, 500)
  }, [onComplete])

  useEffect(() => {
    const startTime = Date.now()
    const duration = 2000
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min((elapsed / duration) * 100, 100)
      
      setCount(Math.floor(progress))
      
      if (progress >= 100) {
        clearInterval(timer)
        handleComplete()
      }
    }, 16)

    return () => clearInterval(timer)
  }, [handleComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          className="text-white text-6xl font-bold mb-4 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TRYKON
        </motion.div>
        <motion.div
          className="text-white/60 text-xl font-mono mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {count.toString().padStart(3, "0")}%
        </motion.div>
        <motion.div
          className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-white to-gray-400"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
