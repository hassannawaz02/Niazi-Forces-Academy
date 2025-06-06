import Logo from "../../public/logo.png";
import React from "react";
import Link from "next/link";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import { FaYoutube, FaFacebook } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="border-t w-full opacity-10 border-purple-300 border-b"></div>
      <footer className="bg-black p-10 md:px-20 text-white flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/4 md:mr-4">
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  height={100}
                  width={100}
                  className="rounded-full"
                  alt=""
                />
                <h1 className="text-2xl font-bold text-teal-300">
                  Niazi Forces Academy
                </h1>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Located in Multan, Pakistan, Niazi Forces Academy provides
                quality tuition for students of all classes.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-3/4 mt-6 md:mt-0">
              <div className="md:mr-4 md:ml-20">
                <h2 className="text-lg font-bold text-teal-300">Pages</h2>
                <ul className="mt-2 space-y-2 text-gray-400 text-base">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/training">Training</Link>
                  </li>
                  <li>
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-bold text-teal-300">Contact Us</h2>
                <ul className="flex items-start mt-2">
  <FaMailBulk className="text-teal-300 text-xl md:text-2xl sm:text-3xl transition-all" />
  <p className="ml-3 text-sm md:text-base text-gray-400 hover:underline break-all">
    arkn100@hotmail.com
  </p>
</ul>
<ul className="flex items-start mt-2">
  <IoCall className="text-teal-300 text-xl md:text-2xl sm:text-3xl transition-all" />
  <p className="ml-3 text-sm md:text-base text-gray-400 hover:underline">
    0314-4220065
  </p>
</ul>

              </div>
              <div>
                <h2 className="text-lg font-bold text-teal-300">Follow Us</h2>
                <ul className="flex space-x-4 mt-3 text-gray-400 text-base">
                  <Link href="https://www.facebook.com/nfamultan" target="_blank">
                    <FaFacebook className="text-gray-400 hover:text-blue-400 cursor-pointer text-3xl" />
                  </Link>
                  <Link href="https://www.youtube.com/@niaziforcesacademymultan9407" target="_blank">
                    <FaYoutube className="text-gray-400 hover:text-red-600 cursor-pointer text-3xl" />
                  </Link>
                  <Link href="https://wa.me/923144220065" target="_blank">
                    <FaWhatsapp className="text-gray-400 hover:text-green-500 cursor-pointer text-3xl" />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-b opacity-20 border-purple-300 mt-6"></div>
          <div className="text-center mt-6 text-teal-300 text-sm">
            © 2025 Niazi Forces Academy. Powered by Hassan Nawaz. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
