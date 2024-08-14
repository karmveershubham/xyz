import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myImage1 from '../assets/left.png';
import myImage2 from '../assets/right.png';

const Header = () => {
  return (
    <div className="w-full">
      <div className="bg-[#032031] w-full h-[72px] flex items-center">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center space-x-8 text-white py-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/instructor" className="hover:underline">Instructor</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="flex-1 flex justify-end items-center space-x-4 pr-4">
          <button className="bg-[#032031] text-white px-4 py-2 rounded border border-[#17A8FC] hover:bg-[#0B3C4D]">
            Login
          </button>
          <button className="bg-[#032031] text-white px-4 py-2 rounded border border-[#17A8FC] hover:bg-[#0B3C4D]">
            Signup
          </button>
        </div>
      </div>
      <div className="bg-[#032031] w-full h-[484px] flex items-center justify-between">
        <Image 
          src={myImage1} 
          alt="Left Icon" 
          width={626} 
          height={253} 
          className="h-auto" 
        />
        <div className="flex-1"></div> {/* Empty div for spacing */}
        <Image 
          src={myImage2} 
          alt="Right Icon" 
          width={626} 
          height={253} 
          className="h-auto" 
        />
      </div>
    </div>
  );
};

export default Header;
