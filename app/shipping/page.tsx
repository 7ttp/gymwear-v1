"use client"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Shipping Information</h1>
        <div className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Fast & Secure Shipping</h2>
            <p>All orders are shipped via <span className='font-bold text-yellow-400'>Shiprocket</span>, India's leading logistics and payment gateway platform. This ensures your order is processed securely and delivered quickly, no matter where you are in India.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Order Processing</h2>
            <p>Orders are processed within 1-2 business days. You will receive a confirmation email with tracking details as soon as your order ships.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Delivery Times</h2>
            <p>Standard shipping takes 3-7 business days across India. Delivery times may vary based on your location and demand.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">International Shipping</h2>
            <p>For international shipping options, please contact our support team. We are working to expand our global reach soon!</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Shipping Charges</h2>
            <p>Shipping charges are calculated at checkout and are non-refundable once the order is shipped.</p>
          </section>
          <p className="text-white/60 text-sm text-right">Last updated: June 2024</p>
        </div>
      </div>
    </div>
  )
} 