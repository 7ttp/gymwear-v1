"use client"

import { motion } from "framer-motion"

export function PatrioticSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-white to-green-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-6xl md:text-8xl font-bold mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
            APNE DESH KA
          </span>
          <br />
          <span className="text-black">GYMWEAR</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Proudly Made in India, Designed for Champions
        </motion.p>

        {/* Tricolor Elements */}
        <motion.div
          className="flex justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-4 bg-orange-500 rounded" />
          <div className="w-16 h-4 bg-white border-2 border-gray-200 rounded" />
          <div className="w-16 h-4 bg-green-500 rounded" />
        </motion.div>
      </div>
    </section>
  )
}
