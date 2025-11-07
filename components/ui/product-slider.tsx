"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const products = [
  {
    id: "1",
    name: "Compression Tank",
    price: 2499,
    image: "/placeholder.svg?height=400&width=300&text=Premium+Tank",
    category: "Tanks",
    sizes: ["S", "M", "L", "XL"],
    description: "Premium compression tank for maximum performance",
  },
  {
    id: "2",
    name: "Performance Shorts",
    price: 1999,
    image: "/placeholder.svg?height=400&width=300&text=Performance+Shorts",
    category: "Shorts",
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight shorts for intense workouts",
  },
  {
    id: "3",
    name: "Training Tee",
    price: 1799,
    image: "/placeholder.svg?height=400&width=300&text=Training+Tee",
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Breathable training tee for all-day comfort",
  },
  {
    id: "4",
    name: "Flex Joggers",
    price: 2799,
    image: "/placeholder.svg?height=400&width=300&text=Flex+Joggers",
    category: "Joggers",
    sizes: ["S", "M", "L", "XL"],
    description: "Flexible joggers for ultimate mobility",
  },
  {
    id: "5",
    name: "Power Hoodie",
    price: 3499,
    image: "/placeholder.svg?height=400&width=300&text=Power+Hoodie",
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium hoodie for post-workout comfort",
  },
  {
    id: "6",
    name: "Elite Tank",
    price: 2299,
    image: "/placeholder.svg?height=400&width=300&text=Elite+Tank",
    category: "Tanks",
    sizes: ["S", "M", "L", "XL"],
    description: "Elite performance tank for champions",
  },
  {
    id: "7",
    name: "Shadow Tee",
    price: 4999,
    image: "/images/drop-hero.png",
    category: "Limited",
    sizes: ["S", "M", "L", "XL"],
    description: "Exclusive shadow collection piece",
  },
  {
    id: "8",
    name: "Pro Shorts",
    price: 2299,
    image: "/placeholder.svg?height=400&width=300&text=Pro+Shorts",
    category: "Shorts",
    sizes: ["S", "M", "L", "XL"],
    description: "Professional grade training shorts",
  },
]

const productMessages = [
  {
    title: "Compression Tee",
    description: "Our signature Compression Tee is engineered for performance, comfort, and style. Designed for Indian athletes who demand the best. Sweat-wicking, ultra-light, and built to last through every rep.",
    details: [
      "Ultra-breathable fabric",
      "Ergonomic fit for all body types",
      "Available in multiple colors",
      "Perfect for intense training and daily wear",
    ],
  },
  {
    title: "Compression Hoodie",
    description: "The Compression Hoodie combines warmth, flexibility, and a premium look—perfect for both training and recovery. Stay sharp, stay warm, and look your best in and out of the gym.",
    details: [
      "Soft, stretchable fleece",
      "Modern athletic silhouette",
      "Zippered pockets for essentials",
      "Ideal for warm-up, cool-down, and street style",
    ],
  },
  {
    title: "Upcoming Goal",
    description: "We're working hard to launch shorts, socks, and everything else you need to complete your gymwear collection. Stay tuned for the next evolution of Indian fitness apparel!",
    details: [
      "Premium shorts for every workout",
      "Performance socks for comfort and support",
      "Accessories and more coming soon",
      "Be the first to know—follow us on Instagram!",
    ],
  },
  {
    title: "Why TRYKON?",
    description: "We're not just a brand, we're a movement. Trusted by gym bros from day 0, TRYKON is redefining Indian gymwear with guts, grit, and style.",
    details: [
      "100% Made in India",
      "Loved by 10,000+ athletes",
      "Engineered for champions",
      "Join the future of fitness fashion",
    ],
  },
]

export function ProductSlider() {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h2>
        <motion.div
          className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TextSlider messages={productMessages} />
        </motion.div>
      </div>
    </section>
  )
}

function TextSlider({ messages }: { messages: typeof productMessages }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [messages.length])
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7 }}
      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl shadow-2xl p-10 border border-white/10"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">{messages[index].title}</h3>
      <p className="text-white/90 text-lg md:text-2xl mb-6 max-w-2xl mx-auto">{messages[index].description}</p>
      <ul className="text-white/80 text-base md:text-lg space-y-2 max-w-xl mx-auto list-disc pl-6">
        {messages[index].details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.div>
  )
}
