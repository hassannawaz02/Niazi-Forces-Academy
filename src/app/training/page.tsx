import React from "react";
import { FaUserGraduate, FaBrain, FaComments, FaClock, FaBuilding } from "react-icons/fa";

const trainingData = [
  {
    title: "Purpose of Training",
    description:
      "At Niazi Forces Academy, we assess the unique personality traits of candidates including discipline, intelligence, emotional stability, and leadership potential. Through a scientific training approach, we identify weak areas and develop a complete persona fit for the Armed Forces.",
    icon: <FaUserGraduate className="text-green-600 text-3xl" />
  },
  {
    title: "Training Methodology",
    description:
      "We discourage memorized answers and promote logical, innovative thinking. Training focuses on polishing existing traits rather than creating artificial ones, enabling natural, confident performance at ISSB and initial selection.",
    icon: <FaBrain className="text-indigo-600 text-3xl" />
  },
  {
    title: "Training Components",
    description: (
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li><strong>Personality Grooming:</strong> Social skills, positive thinking, leadership development, communication.</li>
        <li><strong>Intellectual:</strong> IQ, general awareness, problem-solving, planning, armed forces knowledge.</li>
        <li><strong>Physical:</strong> ISSB-style physical obstacle training and fitness building.</li>
        <li><strong>Interview:</strong> Realistic mock interviews to strengthen confidence and representation skills.</li>
      </ul>
    ),
    icon: <FaComments className="text-orange-600 text-3xl" />
  },
  {
    title: "Training Duration",
    description:
      "Ideal training spans one month, but candidates may continue until ISSB date without any extra charges. Consistency ensures preparedness.",
    icon: <FaClock className="text-yellow-500 text-3xl" />
  },
  {
    title: "Facilities",
    description:
      "Our infrastructure includes hostels, classrooms, online testing systems, outdoor/command tasks, and real ISSB-style group discussions and challenges.",
    icon: <FaBuilding className="text-blue-600 text-3xl" />
  }
];

export default function TrainingSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 border-t border-green-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-3">Training at Niazi Forces Academy</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Scientifically designed modules to help you build a powerful and balanced personality tailored for the Armed Forces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainingData.map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 border border-green-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-full border border-green-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {item.title}
                </h3>
              </div>
              <div className="text-gray-700 text-sm">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
