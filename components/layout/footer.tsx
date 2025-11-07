"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  const footerLinks = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "About Us", href: "/about" },
    { label: "Support", href: "/support" },
  ]

  return (
    <footer className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          className="relative flex justify-center items-center mb-12"
        >
          {/* SVG filter for liquid effect */}
          <svg width="0" height="0">
            <filter id="liquid-grey" x="0" y="0">
              <feTurbulence id="turb" baseFrequency="0.02 0.03" numOctaves="2" result="turb" seed="2"/>
              <feDisplacementMap in2="turb" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G"/>
              <feColorMatrix type="matrix" values="0.5 0 0 0 0.3  0 0.5 0 0 0.3  0 0 0.5 0 0.3  0 0 0 1 0"/>
            </filter>
          </svg>
          <motion.h2
            className="text-[12vw] md:text-[8vw] font-extrabold text-white/10 transition-all duration-500 cursor-pointer select-none relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="relative group block">
              <span
                className="block group-hover:text-white/80 transition-colors duration-500"
                style={{ WebkitFilter: 'none', filter: 'none' }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{
                    filter: 'url(#liquid-grey)',
                    color: '#fff',
                  }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  style={{ display: 'inline-block' }}
                >
                  TRYKON.
                </motion.span>
              </span>
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {footerLinks.map((link, index) => (
            <Link key={link.href} href={link.href} className="text-white/70 hover:text-white transition-colors text-lg">
              {link.label}
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50">© 2024 TRYKON. All rights reserved. Made with ❤️ in India.</p>
        </motion.div>
      </div>
    </footer>
  )
}
