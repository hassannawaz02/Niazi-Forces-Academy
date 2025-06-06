import {
  FaShieldAlt,
  FaBook,
  FaMedal,
  FaHospitalSymbol,
  FaUserNurse,
  FaUserTie
} from "react-icons/fa";

const courses = [
  {
    title: "Initial & ISSB Preparation",
    description:
      "Complete guidance for ARMY, NAVY, and AIRFORCE initial and ISSB tests, including physical and psychological assessments.",
    icon: <FaShieldAlt className="text-green-700 text-3xl" />
  },
  {
    title: "Cadet College Preparation",
    description:
      "Focused coaching for entry tests of all major cadet colleges. Academic, medical, and interview preparation.",
    icon: <FaBook className="text-blue-600 text-3xl" />
  },
  {
    title: "Airmen Courses",
    description:
      "Expert prep for Pakistan Air Force Airmen selection including academics, interview practice, and discipline.",
    icon: <FaMedal className="text-indigo-600 text-3xl" />
  },
  {
    title: "AMC & PAF Medical Commission",
    description:
      "Professional coaching for AMC and PAF medical branch, covering entry tests and panel interviews.",
    icon: <FaHospitalSymbol className="text-red-600 text-3xl" />
  },
  {
    title: "Nursing Service Preparation",
    description:
      "Courses for Armed Forces Nursing Service applicants. Includes biology, English, and interview readiness.",
    icon: <FaUserNurse className="text-pink-600 text-3xl" />
  },
  {
    title: "Lady Cadet Course (LCC)",
    description:
      "Empowering training for female candidates aspiring to join the Army through LCC, including leadership grooming.",
    icon: <FaUserTie className="text-purple-600 text-3xl" />
  }
];

export default function CoursesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-3">Our Featured Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Unlock your potential and prepare with confidence for a prestigious career in Pakistan&apos;s Armed Forces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white border border-green-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-full">{course.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800">{course.title}</h3>
              </div>
              <p className="text-sm text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-green-700 text-lg font-semibold">
            For more information, contact us at <span className="underline">0314-4220065</span>
          </p>
        </div>
      </div>
    </section>
  );
}
