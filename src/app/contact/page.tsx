"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMail, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
     access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", access_key: formData.access_key });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-white to-green-50 flex flex-col items-center justify-center py-10 md:py-14 px-4"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-600">
          Contact Us
        </span>
      </h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-white/30 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
      >
        <div className="relative">
          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-300" />
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-300" />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
        </div>

        <div className="relative">
          <FiMessageSquare className="absolute left-4 top-4 text-teal-300" />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all min-h-[120px]"
          />
        </div>

        <button
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <FiSend className="text-white" />
              Send Message
            </>
          )}
        </button>

        {submitStatus === "success" && (
          <p className="text-green-400 text-center">Message sent successfully!</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-400 text-center">Something went wrong. Try again later.</p>
        )}
      </form>

      {/* Bottom Contact Info */}
      <div className="mt-8 text-center">
        <p className="text-green-700 text-base font-semibold">
          For more information,{" "}
          <Link href="/contact" className="underline text-teal-500 hover:text-teal-600 transition-colors">
            contact us
          </Link>{" "}
          at <span className="text-teal-400">0314-4220065</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;