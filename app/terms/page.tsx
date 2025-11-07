"use client"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <div className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using TRYKON, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our website or services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Use of Content</h2>
            <p>All content, products, and materials on TRYKON are for personal, non-commercial use only. Unauthorized resale, distribution, or reproduction is strictly prohibited.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Orders & Payments</h2>
            <p>All orders are subject to acceptance and availability. Payments are securely processed via Shiprocket. TRYKON reserves the right to refuse or cancel any order at our discretion.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Shipping & Delivery</h2>
            <p>Shipping is handled by Shiprocket. Delivery times may vary based on location and demand. TRYKON is not responsible for delays caused by third-party logistics.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Returns & Refunds</h2>
            <p>Returns are accepted within 7 days of delivery for unused, unworn items in original packaging. Refunds are processed after inspection. Shipping charges are non-refundable.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
            <p>All trademarks, logos, and content are the property of TRYKON. Unauthorized use is strictly prohibited.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
            <p>TRYKON is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Changes to Terms</h2>
            <p>We reserve the right to update these Terms at any time. Continued use of TRYKON constitutes acceptance of the revised terms.</p>
          </section>
          <p className="text-white/60 text-sm text-right">Last updated: June 2024</p>
        </div>
      </div>
    </div>
  )
} 