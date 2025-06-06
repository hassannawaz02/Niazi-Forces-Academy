'use client';
import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const LocationPage = () => {
  return (
    <section className="bg-[#f9fefb] pt-16 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto text-center space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">
          Visit <span className="underline decoration-green-500">Niazi Forces Academy</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          We are located in the heart of Multan. You can visit us using the map below.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg border border-green-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.703458867482!2d71.48608255578088!3d30.262352500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b34784a5c8b79%3A0x5a3491a74833b0e!2sNiazi%20Forces%20Academy!5e1!3m2!1sen!2s!4v1748914392138!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pb-4">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition text-center border-t-4 border-green-500">
          <h3 className="text-lg font-bold text-green-700 flex items-center justify-center gap-2">
            <FaEnvelope className="text-green-600" /> Email
          </h3>
          <p className="text-gray-600 mt-2">arkn100@hotmail.com</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition text-center border-t-4 border-green-500">
          <h3 className="text-lg font-bold text-green-700 flex items-center justify-center gap-2">
            <FaWhatsapp className="text-green-600" /> Call / WhatsApp
          </h3>
          <p className="text-gray-600 mt-2">0341-4220065</p>
        </div>
      </div>
    </section>
  );
};

export default LocationPage;
