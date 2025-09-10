export default function ProjectsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">🔧 Projects</h1>
      <p className="text-lg mb-10">
        Explore practical Arduino & coding projects with tutorials and source code.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/projects/led-blink.jpg"
            alt="LED Blink Project"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">💡 LED Blink</h2>
            <p className="text-gray-700 mb-4">
              The simplest Arduino project to learn how to make an LED blink using code.
              Great for beginners!
            </p>
            {/* Placeholder for YouTube */}
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700"
            >
              Watch Tutorial
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/projects/three-led.jpg"
            alt="Three LED Light System"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">🔌 Three LED Light System</h2>
            <p className="text-gray-700 mb-4">
              A project controlling three LEDs with Arduino — learn about pins,
              sequencing, and coding logic.
            </p>
            {/* Placeholder for YouTube */}
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700"
            >
              Watch Tutorial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
