export default function VideosPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">🎥 Arduino World</h1>
      <p className="text-lg mb-10 text-gray-700">
        Before we start uploading videos, here are some amazing things you can
        build with Arduino. Stay tuned for tutorials coming soon 🚀.
      </p>

      {/* Arduino Ideas Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Idea 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/arduino/led.jpg"
            alt="LED Projects"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">💡 LED Projects</h2>
            <p className="text-gray-700">
              Learn the basics of Arduino with LED blink, patterns, and
              sequencing.
            </p>
          </div>
        </div>

        {/* Idea 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/arduino/motor.jpg"
            alt="Motor Control"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">⚙️ Motor Control</h2>
            <p className="text-gray-700">
              Control DC motors, stepper motors, and servos with Arduino for
              robotics projects.
            </p>
          </div>
        </div>

        {/* Idea 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/arduino/sensor.jpg"
            alt="Sensors"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">📡 Sensors & IoT</h2>
            <p className="text-gray-700">
              Connect temperature, motion, and ultrasonic sensors for smart IoT
              systems.
            </p>
          </div>
        </div>

        {/* Idea 4 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/arduino/robot.jpg"
            alt="Robotics"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">🤖 Robotics</h2>
            <p className="text-gray-700">
              Build robots with Arduino and sensors — from line followers to
              obstacle-avoiding bots.
            </p>
          </div>
        </div>

        {/* Idea 5 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/arduino/home-automation.jpg"
            alt="Home Automation"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">🏠 Home Automation</h2>
            <p className="text-gray-700">
              Control lights, fans, and appliances with Arduino and IoT.
            </p>
          </div>
        </div>

        {/* Idea 6 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <img
            src="/arduino/drone.jpg"
            alt="Drone Projects"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">🛸 Drones</h2>
            <p className="text-gray-700">
              Explore how Arduino can be used to build and control DIY drones.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Box */}
      <div className="mt-12 p-6 bg-blue-600 text-white rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-2">🎬 Videos Coming Soon!</h2>
        <p>
          Our YouTube tutorials will be added here. Stay connected with AI Tech
          Thinker 🚀.
        </p>
      </div>
    </div>
  );
}
