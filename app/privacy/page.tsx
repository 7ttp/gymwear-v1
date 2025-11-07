"use client"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect only the information necessary to process your orders, provide support, and improve your experience. This includes your name, contact details, shipping address, and payment information.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Use of Information</h2>
            <p>Your data is used solely for order fulfillment, customer support, and communication about TRYKON products and offers. We do not sell or share your data with third parties.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Payment & Shipping</h2>
            <p>Payments and shipping are securely handled by Shiprocket. Your payment details are never stored on our servers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>We use industry-standard encryption and security measures to protect your data. Access is restricted to authorized personnel only.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
            <p>We use cookies to enhance your browsing experience and analyze site traffic. You can disable cookies in your browser settings.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
            <p>You may request access, correction, or deletion of your personal data at any time by contacting our support team.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Changes to Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Continued use of TRYKON constitutes acceptance of the revised policy.</p>
          </section>
          <p className="text-white/60 text-sm text-right">Last updated: June 2024</p>
        </div>
      </div>
    </div>
  )
} 