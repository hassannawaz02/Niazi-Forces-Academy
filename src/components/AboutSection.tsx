"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white text-black px-6 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-teal-300">
            About Niazi Forces Academy
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            At Niazi Forces Academy, we prepare the leaders of tomorrow. Our academy
            specializes in coaching students for Army, Navy, and PAF commissions —
            blending discipline, dedication, and expert guidance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-teal-300 mb-10">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Experienced Military Trainers",
                desc: "Guidance from retired officers and seasoned mentors.",
              },
              {
                title: "Complete ISSB & Cadet Preparation",
                desc: "Strategic preparation for written, physical, and interview rounds.",
              },
              {
                title: "Physical Training Discipline",
                desc: "Fitness sessions under strict routines.",
              },
              {
                title: "Mock Interviews & Grooming",
                desc: "Real-time practice and feedback to build confidence.",
              },
              {
                title: "Affordable Fee Structure",
                desc: "Top-tier training at budget-friendly rates.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="hover:shadow-xl transition-shadow border border-teal-100"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-teal-300 mb-6">
            What Our Students Say
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            &quot;Niazi Forces Academy helped me crack the ISSB on my first attempt. Their daily
            routine, guidance, and mentorship is unmatched!&quot;
          </p>
          <span className="block text-green-700 font-medium mt-2">– Cadet Ali Raza</span>
        </motion.div>

        {/* Call to Action Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-teal-50 rounded-xl p-6 text-center shadow-inner"
        >
          <h3 className="text-xl font-semibold text-teal-300 mb-2">
            📍 Visit Us in Multan – or Call 0314 4220065 Today!
          </h3>
          <p className="text-gray-700 text-sm">
            Let’s begin your military journey with confidence and clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
