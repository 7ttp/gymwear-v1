"use client"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">About TRYKON</h1>
        <div className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>TRYKON is India's premium fitness wear brand, dedicated to empowering champions with high-quality, stylish, and comfortable gymwear. We believe in pushing boundaries and setting new standards for Indian athletes.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">What Sets Us Apart</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>100% designed and made in India</li>
              <li>Engineered for performance, comfort, and style</li>
              <li>Trusted by gym bros from day 0</li>
              <li>Driven by innovation and community</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Quality over everything</li>
              <li>Inclusivity and empowerment</li>
              <li>Continuous improvement</li>
              <li>Giving back to the fitness community</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Join the Movement</h2>
            <p>We're on a mission to redefine Indian gymwear. Join us and be part of the future of fitness fashion.</p>
          </section>
          <p className="text-white/60 text-sm text-right">Made with ❤️ in India.</p>
        </div>
      </div>
    </div>
  )
} 