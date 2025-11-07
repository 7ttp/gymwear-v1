"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { ThreeBackground } from "@/components/ui/three-background"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Plus, Minus } from "lucide-react"
import { gsap } from "gsap"

const productData = {
  "1": {
    id: "1",
    name: "Compression Tank",
    price: 2499,
    originalPrice: 2999,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description: "Premium compression tank designed for maximum performance and comfort during intense workouts.",
    features: [
      "Moisture-wicking fabric technology",
      "4-way stretch for unrestricted movement",
      "Flatlock seams to prevent chafing",
      "Anti-odor treatment",
      "Quick-dry material",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Gray"],
    rating: 4.8,
    reviews: 124,
    category: "Tanks",
    inStock: true,
    specifications: {
      Material: "88% Polyester, 12% Elastane",
      Fit: "Compression Fit",
      Care: "Machine wash cold, tumble dry low",
      Origin: "Made in India",
    },
  },
  "2": {
    id: "2",
    name: "Performance Shorts",
    price: 1999,
    originalPrice: 2299,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description: "Lightweight performance shorts engineered for intense training sessions and maximum mobility.",
    features: [
      "Lightweight and breathable",
      "Built-in compression liner",
      "Secure zip pocket",
      "Reflective details",
      "7-inch inseam",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    rating: 4.7,
    reviews: 89,
    category: "Shorts",
    inStock: true,
    specifications: {
      Material: "92% Polyester, 8% Spandex",
      Fit: "Athletic Fit",
      Care: "Machine wash cold, hang dry",
      Origin: "Made in India",
    },
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = productData[params.id as keyof typeof productData]

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0])
      setSelectedSize(product.sizes[1]) // Default to medium
    }
  }, [product])

  useEffect(() => {
    // GSAP animations for product images
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".product-image",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      )
    }
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen bg-black relative">
        <ThreeBackground />
        <Navbar />
        <div className="relative z-10 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white">Product Not Found</h1>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      router.push("/auth/signin")
      return
    }

    if (!selectedSize) {
      alert("Please select a size")
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
    })

    // GSAP animation for add to cart
    gsap.to(".add-to-cart-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    })
  }

  return (
    <div className="min-h-screen bg-black relative">
      <ThreeBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="product-image w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-white" : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white/60 text-sm uppercase tracking-wide">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white/80 text-sm">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-white">₹{product.price}</span>
                  <span className="text-white/50 line-through text-xl">₹{product.originalPrice}</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>

                <p className="text-white/80 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-white font-semibold mb-3">Color: {selectedColor}</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color ? "border-white scale-110" : "border-white/30 hover:border-white/60"
                      }`}
                      style={{
                        backgroundColor:
                          color.toLowerCase() === "white"
                            ? "#ffffff"
                            : color.toLowerCase() === "black"
                              ? "#000000"
                              : color.toLowerCase() === "navy"
                                ? "#1e3a8a"
                                : color.toLowerCase() === "gray"
                                  ? "#6b7280"
                                  : color.toLowerCase(),
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-white font-semibold mb-3">Size: {selectedSize}</h3>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 rounded-lg border transition-all ${
                        selectedSize === size
                          ? "border-white bg-white text-black"
                          : "border-white/30 text-white/80 hover:border-white/60 hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-white font-semibold mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white/10 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-white/80 hover:text-white transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-3 text-white font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 text-white/80 hover:text-white transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="add-to-cart-btn flex-1 bg-white text-black py-4 px-8 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 rounded-lg border transition-all ${
                    isWishlisted
                      ? "border-red-500 bg-red-500/20 text-red-400"
                      : "border-white/30 text-white/80 hover:border-white/60"
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isWishlisted ? "fill-current" : ""}`} />
                </button>

                <button className="p-4 rounded-lg border border-white/30 text-white/80 hover:border-white/60 hover:text-white transition-all">
                  <Share2 className="h-6 w-6" />
                </button>
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-white/80 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Truck className="h-6 w-6 text-white/80 mx-auto mb-2" />
                  <p className="text-white/80 text-sm">Free Shipping</p>
                  <p className="text-white/60 text-xs">Orders over ₹1999</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <RotateCcw className="h-6 w-6 text-white/80 mx-auto mb-2" />
                  <p className="text-white/80 text-sm">Easy Returns</p>
                  <p className="text-white/60 text-xs">30-day policy</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Shield className="h-6 w-6 text-white/80 mx-auto mb-2" />
                  <p className="text-white/80 text-sm">Warranty</p>
                  <p className="text-white/60 text-xs">1-year quality</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Specifications */}
          <motion.div
            className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium">{key}</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
