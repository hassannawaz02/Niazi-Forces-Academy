import { FaEnvelope, FaPhone, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-black text-white py-2 px-4 md:px-20 flex justify-between items-center text-sm">
      {/* Left Side - Contact Info */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-teal-300" />
          <span>arkn100@hotmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-teal-300" />
          <span>0314-4220065</span>
        </div>
      </div>

      {/* Right Side - Social Icons */}
      <div className="flex items-center space-x-3">
        <Link href="https://www.facebook.com/nfamultan" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-400 cursor-pointer text-xl md:text-2xl sm:text-3xl transition-all" />
        </Link>
        <Link href="https://www.youtube.com/@niaziforcesacademymultan9407" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-red-600 cursor-pointer text-xl md:text-2xl sm:text-3xl transition-all" />
        </Link>
        <Link href="https://wa.me/923144220065" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-500 cursor-pointer text-xl md:text-2xl sm:text-3xl transition-all" />
        </Link>
      </div>

    </div>
  );
};

export default TopBar;
