"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/ui/hero-section"
import { ProductSlider } from "@/components/ui/product-slider"
import { BrandValues } from "@/components/ui/brand-values"
import { PatrioticSection } from "@/components/ui/patriotic-section"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useMotionValue, useTransform } from "framer-motion"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const y = useMotionValue(0)
  const yParallax = useTransform(y, [0, 500], [0, -100])

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        y.set(window.scrollY)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [y])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}</AnimatePresence>

      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Navbar />
          <HeroSection />

          {/* Fullscreen Image Section Below Video */}
          <section className="w-full h-[60vh] md:h-[80vh] relative">
            <Image src="/images/drop-hero.png" alt="TRYKON Drop Hero" fill className="object-cover w-full h-full" priority />
          </section>

          {/* Trust Statement */}
          <section className="bg-black py-12 text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight relative inline-block"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            >
              <span className="relative z-10">Gym Bros Trust Us From Day 0</span>
              <motion.span
                className="absolute left-0 top-1/2 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 opacity-30 blur-lg pointer-events-none"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.h2>
            <motion.p
              className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              We got the guts to be the future of Indian gymwear. <span className="font-bold text-yellow-400">Join the movement.</span>
            </motion.p>
          </section>

          {/* Animated Stats Section */}
          <section className="bg-gradient-to-r from-black via-gray-900 to-black py-12">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
              <motion.div
                className="text-white/80 text-xl md:text-2xl mb-6 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                You look like one.
              </motion.div>
              <div className="flex flex-wrap justify-center gap-8 w-full">
                {[
                  { value: '100%', label: 'Made in India', color: 'from-yellow-400 via-pink-500 to-red-500' },
                  { value: '#1', label: 'For Innovation', color: 'from-blue-400 via-purple-500 to-pink-500' },
                  { value: '4.9/5', label: 'Avg. Community Rating', color: 'from-green-400 via-teal-500 to-blue-500' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.value}
                    className="text-center"
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.2, type: 'spring', bounce: 0.4 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <motion.div
                      className={`text-5xl md:text-6xl font-bold text-white animate-pulse bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2, repeatType: 'loop', delay: 0.5 + i * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/70 text-lg mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products (Text Only) */}
          <section className="py-20 bg-black text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Featured Products</h2>
              <div className="space-y-6 text-lg md:text-xl">
                <div>
                  <span className="font-bold text-2xl md:text-3xl">Compression Tee</span>
                  <p className="mt-2 text-white/80">Our signature Compression Tee is engineered for performance, comfort, and style. Designed for Indian athletes who demand the best.</p>
                </div>
                <div>
                  <span className="font-bold text-2xl md:text-3xl">Compression Hoodie</span>
                  <p className="mt-2 text-white/80">The Compression Hoodie combines warmth, flexibility, and a premium look—perfect for both training and recovery.</p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <span className="font-bold text-xl md:text-2xl text-yellow-400">Upcoming Goal</span>
                  <p className="mt-2 text-white/70">We're working hard to launch shorts, socks, and everything else you need to complete your gymwear collection. Stay tuned!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Premium Testimonials Carousel */}
          <section className="bg-black py-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">What Real Gym Bros Say</h2>
            <Carousel opts={{ loop: true, align: "center" }}>
              <CarouselContent>
                <CarouselItem>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -40 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #fff2' }}
                    className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl cursor-pointer"
                  >
                    <motion.p
                      className="text-white/90 text-xl mb-4"
                      whileHover={{ color: '#fff', scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      “TRYKON is the only brand I trust for my toughest sessions. The quality is unreal.”
                    </motion.p>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-white font-bold">Aman K., Delhi</span>
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                  </motion.div>
                </CarouselItem>
                <CarouselItem>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -40 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #fff2' }}
                    className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl cursor-pointer"
                  >
                    <motion.p
                      className="text-white/90 text-xl mb-4"
                      whileHover={{ color: '#fff', scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      “I've been with TRYKON since day 0. Proud to see an Indian brand lead the way!”
                    </motion.p>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-white font-bold">Priya D., Bangalore</span>
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                  </motion.div>
                </CarouselItem>
                <CarouselItem>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -40 }}
                    transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #fff2' }}
                    className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl cursor-pointer"
                  >
                    <motion.p
                      className="text-white/90 text-xl mb-4"
                      whileHover={{ color: '#fff', scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      “TRYKON's fit and style are unmatched. It's not just gymwear, it's a statement.”
                    </motion.p>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-white font-bold">Zaid F., Hyderabad</span>
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                  </motion.div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </section>

          {/* Product Slider (Autoplay) */}
          <ProductSlider autoplay />

          {/* Glowing CTA Banner */}
          <section className="w-full py-12 bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-2xl border-t border-gray-700">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Ready to Level Up?</h2>
              <p className="text-white/90 text-lg md:text-2xl mb-6">Join the TRYKON movement and get exclusive access to new drops, offers, and more.</p>
              <button className="bg-gradient-to-r from-gray-700 via-black to-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/10">
                Join Now
              </button>
            </div>
          </section>

          <BrandValues />
          <PatrioticSection />
          <Footer />
        </motion.div>
      )}
    </>
  )
}
