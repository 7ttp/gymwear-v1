"use client"

import { motion } from "framer-motion"

export function BrandValues() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Motive</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              To empower every fitness enthusiast with premium quality gymwear that enhances performance, comfort, and
              confidence. We believe that the right gear can transform your workout experience and help you achieve your
              fitness goals.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Motto</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              "Strength in Every Thread" - We craft each piece with precision, using advanced materials and innovative
              designs that move with your body. Quality isn't just our standard; it's our promise to every athlete who
              chooses TRYKON.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
