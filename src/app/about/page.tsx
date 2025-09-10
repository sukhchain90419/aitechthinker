export default function AboutPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">About AI Tech Thinker</h1>

      {/* Intro */}
      <p className="text-lg leading-relaxed mb-6">
        Welcome to <span className="font-semibold">AI Tech Thinker</span> 🎉 —
        a learning hub for coding, Arduino projects, app & web development, and
        AI-powered tools.  
        Our goal is to make coding simple and fun for everyone 🚀.
      </p>

      {/* Courses Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">📚 Courses on YouTube</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Arduino Projects – From basics to advanced automation ⚡</li>
        <li>Python & AI – Learn coding and build AI tools 🤖</li>
        <li>App Development – Flutter & React Native tutorials 📱</li>
        <li>Web Development – HTML, CSS, JavaScript, React, Next.js 🌐</li>
        <li>Practical Coding Projects – Step by step explained 🛠️</li>
      </ul>

      {/* Extras */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">✨ What Else We Share</h2>
      <p className="text-lg leading-relaxed">
        Apart from YouTube courses, we also provide:
      </p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Free resources & tools for students</li>
        <li>Open-source code for all projects</li>
        <li>Guides to improve coding skills</li>
        <li>Latest updates on AI & technology</li>
      </ul>

      {/* Call to Action */}
      <div className="mt-10 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">🎥 Join Our YouTube Family!</h3>
        <p className="mb-4">
          Subscribe to{" "}
          <span className="font-bold">AI Tech Thinker</span> on YouTube for
          regular tutorials, coding challenges, and project guides.
        </p>
        <a
          href="https://www.youtube.com/@YOUR_CHANNEL_NAME"
          target="_blank"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-200"
        >
          Visit YouTube Channel
        </a>
      </div>
    </div>
  );
}
