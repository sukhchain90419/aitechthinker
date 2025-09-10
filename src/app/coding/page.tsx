export default function CodingPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">💻 Project Codes</h1>
      <p className="text-lg mb-10">
        Here you’ll find the source code for all Arduino & coding projects explained step by step.  
        Currently, we have 2 beginner projects — more will be added soon 🚀.
      </p>

      {/* Project 1: LED Blink */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💡 Project 1: LED Blink</h2>
        <p className="mb-4 text-gray-700">
          This is the most basic Arduino project. An LED is connected to pin 13 
          and will blink with a delay.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// LED Blink Project
int ledPin = 13; // Pin connected to LED

void setup() {
  pinMode(ledPin, OUTPUT); // set pin as output
}

void loop() {
  digitalWrite(ledPin, HIGH); // turn LED ON
  delay(1000);                // wait 1 second
  digitalWrite(ledPin, LOW);  // turn LED OFF
  delay(1000);                // wait 1 second
}`}
        </pre>
      </div>

      {/* Project 2: Three LED Light System */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔌 Project 2: Three LED Light System</h2>
        <p className="mb-4 text-gray-700">
          In this project, three LEDs are connected to pins 8, 9, and 10. 
          They will blink in sequence, one after the other.
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Three LED Light System
int led1 = 8;
int led2 = 9;
int led3 = 10;

void setup() {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
}

void loop() {
  digitalWrite(led1, HIGH);
  delay(500);
  digitalWrite(led1, LOW);

  digitalWrite(led2, HIGH);
  delay(500);
  digitalWrite(led2, LOW);

  digitalWrite(led3, HIGH);
  delay(500);
  digitalWrite(led3, LOW);
}`}
        </pre>
      </div>

      {/* Future Projects */}
      <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">🚀 More Coming Soon</h3>
        <p className="text-gray-700">
          More Arduino, AI, and coding projects will be added here. Stay tuned!
        </p>
      </div>
    </div>
  );
}
