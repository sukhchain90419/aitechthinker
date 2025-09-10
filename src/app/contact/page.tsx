"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Send to Formspree (free service)
    const response = await fetch("https://formspree.io/f/mzzpppgo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent ✅");
      form.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Contact Us</h1>
      <p className="text-gray-300 mb-8 text-center max-w-xl">
        Have questions, ideas, or collaboration requests? Fill out the form
        below and we’ll get back to you soon.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-xl"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
        >
          Send Message
        </button>

        {/* Status Message */}
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
}
