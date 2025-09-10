"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">🚀 AI Tech Thinker</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Learn Arduino, AI, Web Development, App Development, and Coding —
          all in one place. Explore tutorials, projects, and coding guides made
          for beginners and advanced learners.
        </p>
        <Link
          href="/about"
          className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Get Started →
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          🌟 What You’ll Learn
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">💡 Arduino Projects</h3>
            <p className="text-gray-700">
              Hands-on learning with LED, sensors, and robotics projects.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">⚙️ Coding Tutorials</h3>
            <p className="text-gray-700">
              Learn coding in Python, C++, JavaScript, and more step by step.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🌐 Web & App Dev</h3>
            <p className="text-gray-700">
              Build modern websites and apps with AI-powered tools.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links to Pages */}
      <section className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          📂 Explore Pages
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Link
            href="/about"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl mb-2">ℹ️ About</h3>
            <p className="text-gray-600">Learn what AI Tech Thinker is about.</p>
          </Link>
          <Link
            href="/Projects"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl mb-2">🛠 Projects</h3>
            <p className="text-gray-600">Explore step-by-step Arduino projects.</p>
          </Link>
          <Link
            href="/coding"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl mb-2">💻 Coding</h3>
            <p className="text-gray-600">Find coding guides & project code.</p>
          </Link>
          <Link
            href="/videos"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl mb-2">🎥 Videos</h3>
            <p className="text-gray-600">Watch tutorials (coming soon!).</p>
          </Link>
          <Link
            href="/contact"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl mb-2">📞 Contact</h3>
            <p className="text-gray-600">Get in touch with us easily.</p>
          </Link>
        </div>
      </section>

      {/* Updates / News */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">📢 Latest Updates</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">✨ New Course Coming Soon!</h3>
            <p className="text-gray-700">
              Arduino Basics — Learn LED blinking, sensors, and more.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">🚀 YouTube Tutorials</h3>
            <p className="text-gray-700">
              Our YouTube channel will launch with free project tutorials soon.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the AI Tech Thinker Community</h2>
        <p className="mb-6">
          Stay updated with the latest coding, Arduino, and AI tutorials.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Contact Us →
        </Link>
      </section>
    </div>
  );
}
