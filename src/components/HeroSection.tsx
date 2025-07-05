'use client';
import React from 'react';
import Link from 'next/link';
import Courses from './CoursesSection';
import About from './AboutSection';

const Hero = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-center px-6 py-2 min-h-[70vh]">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-green-900 leading-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
            Niazi Forces Academy
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-700 max-w-2xl text-base md:text-lg">
          Your trusted partner in preparing for Armed Forces selection — Army, PAF, and Navy.
          Comprehensive coaching for entry tests, ISSB, medicals, and interviews. Build discipline,
          knowledge, and confidence with us.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/courses">
            <button className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all">
              Explore Courses
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 border border-teal-500 text-teal-600 rounded-full hover:bg-teal-100 transition-all">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Video Section - right below buttons */}
        <div className="w-full flex justify-center px-4 mt-10">
          <div className="relative w-full max-w-3xl aspect-video shadow-lg rounded-xl overflow-hidden group">
            <video
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              playsInline
              controls
              controlsList="nodownload"
            >
              <source src="/videos/Main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Contact Line - now under the video */}
        <div className="mt-6 text-green-700 text-base md:text-lg font-medium">
          For more information,{' '}
          <Link href="/contact" className="underline text-teal-500 hover:text-teal-700">
            contact us
          </Link>{' '}
          at <span className="underline">0314-4220065</span>
        </div>
      </section>
      <About />
      <Courses />
    </>
  );
};

export default Hero;
