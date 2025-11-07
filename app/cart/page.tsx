"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { ThreeBackground } from "@/components/ui/three-background"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { isAuthenticated } = useAuth()
  const { items, updateQuantity, removeItem, total, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black relative">
        <ThreeBackground />
        <Navbar />

        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ShoppingBag className="h-16 w-16 text-white/60 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">Your Cart</h1>
              <p className="text-white/80 mb-8">Please sign in to view your cart and continue shopping.</p>
              <Link
                href="/auth/signin"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Sign In to Continue
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  const handleCheckout = () => {
    setIsProcessing(true)
    // Simulate checkout process
    setTimeout(() => {
      alert("Checkout functionality will be integrated with ShipRocket!")
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black relative">
      <ThreeBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Cart</h1>
            <p className="text-white/80 text-xl">
              {items.length === 0
                ? "Your cart is empty"
                : `${items.length} item${items.length > 1 ? "s" : ""} in your cart`}
            </p>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ShoppingBag className="h-24 w-24 text-white/40 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
              <p className="text-white/60 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link
                href="/men"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <motion.div
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${item.size}`}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex gap-6">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-white/10">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                            <p className="text-white/60">Size: {item.size}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-white/60 hover:text-red-400 transition-colors p-2"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center bg-white/10 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="p-2 text-white/80 hover:text-white transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 text-white font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="p-2 text-white/80 hover:text-white transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-2xl font-bold text-white">₹{item.price * item.quantity}</p>
                            <p className="text-white/60 text-sm">₹{item.price} each</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Order Summary */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 sticky top-32">
                  <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-white/80">
                      <span>Subtotal</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Shipping</span>
                      <span>{total >= 1999 ? "Free" : "₹99"}</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Tax</span>
                      <span>₹{Math.round(total * 0.18)}</span>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>Total</span>
                        <span>₹{total + (total >= 1999 ? 0 : 99) + Math.round(total * 0.18)}</span>
                      </div>
                    </div>
                  </div>

                  {total >= 1999 && (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-6">
                      <p className="text-green-400 text-sm font-medium">🎉 You qualify for free shipping!</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <button
                      onClick={handleCheckout}
                      disabled={isProcessing}
                      className="w-full bg-white text-black py-4 px-6 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isProcessing ? (
                        "Processing..."
                      ) : (
                        <>
                          Proceed to Checkout
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>

                    <Link
                      href="/men"
                      className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-colors text-center block"
                    >
                      Continue Shopping
                    </Link>

                    <button
                      onClick={clearCart}
                      className="w-full text-white/60 hover:text-red-400 transition-colors py-2 text-sm"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
