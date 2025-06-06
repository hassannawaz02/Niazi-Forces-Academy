'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+923144220065"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
    >
      <FaWhatsapp size={28}  />
    </a>
  );
}
