"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { ThreeBackground } from "@/components/ui/three-background"
import { Grid, List } from "lucide-react"
import { menProducts } from "@/lib/men-products"

const categories = ["All", "Tanks", "Shorts", "T-Shirts", "Joggers", "Hoodies"]
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating"]

export default function MenPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = menProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return a.price - b.price
      case "Price: High to Low":
        return b.price - a.price
      case "Best Rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-black relative">
      <ThreeBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20" id="men-section">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Men's Collection</h1>
            <p className="text-white/80 text-xl">Premium fitness wear designed for champions</p>
          </motion.div>

          {/* Filters and Controls */}
          <motion.div
            className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? "bg-white text-black"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/40"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option} className="bg-black">
                    {option}
                  </option>
                ))}
              </select>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-white text-black" : "bg-white/10 text-white/80"
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-white text-black" : "bg-white/10 text-white/80"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group hover:bg-white/10 transition-all duration-300 ${viewMode === "list" ? "flex gap-6" : ""}`}
                id={product.drop ? "new-drop" : undefined}
              >
                {product.drop && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-black font-bold px-4 py-1 rounded-full text-xs shadow-lg animate-pulse z-10">
                    NEW DROP
                  </span>
                )}
                <div className={`${viewMode === "list" ? "w-64 flex-shrink-0" : "aspect-[3/4]"} overflow-hidden`}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-white/90">{product.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <span>★</span>
                      <span className="text-white/80 text-sm">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-white/60 mb-2">{product.category}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">₹{product.price}</span>
                    <span className="text-white/50 line-through">₹{product.originalPrice}</span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {product.sizes.slice(0, 4).map((size) => (
                        <span key={size} className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs">
                          {size}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/product/${product.id}`}
                      className="bg-white text-black px-6 py-2 rounded-lg hover:bg-white/90 transition-colors font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
