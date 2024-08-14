// components/Profile.js
import React from 'react';
import Image from 'next/image';
import myImg from '../assets/image.png';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineMail, AiOutlineHome } from 'react-icons/ai';

const Profile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: '100%%', height: '950px' }}>
      <div className="bg-blue-500 text-center py-4">
        <h2 className="text-white font-bold">#Ranked in Top 10 Teachers</h2>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          className="h-24 w-24 rounded-full border-2 border-blue-500"
          src={myImg}
          alt="Profile"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">Ryan Doblen</h2>
        <p className="text-gray-600">Profession</p>
        <p className="text-gray-600">
          <i className="fas fa-map-marker-alt"></i> Chicago, United States
        </p>
      </div>
       <div className="px-6 py-4">
        <h3 className="text-lg font-semibold mb-2">Teacher Details</h3>
        <hr className="my-4 border-gray-300" />
        <ul className="text-gray-700">
          <li className="flex justify-between py-2">
            <span><AiOutlineUser className="inline-block mr-1" /> Name</span>
            <span>Ryan Doblen</span>
          </li>
          <li className="flex justify-between py-2">
            <span><AiOutlineMail className="inline-block mr-1" /> Mail Address</span>
            <span>Ryandoblen124@gmail.com</span>
          </li>
          <li className="flex justify-between py-2">
            <span><FaPhone className="inline-block mr-1" /> Mobile Number</span>
            <span>5</span>
          </li>
          <li className="flex justify-between py-2">
            <span><AiOutlineHome className="inline-block mr-1" /> Teacher ID</span>
            <span>5</span>
          </li>
          <li className="flex justify-between py-2">
            <span><FaLinkedin className="inline-block mr-1" /> LinkedIn</span>
            <span>LinkedIn</span>
          </li>
        </ul>
      </div>
      <div className="text-center py-4">
        <button className="bg-[#17A8FC] text-white py-2 px-4 rounded-[10px] flex items-center justify-center " style={{ width: '360px', height: '60px',paddingLeft: '16px'}}>
            <i className="fas fa-envelope mr-2"></i> Contact Teacher
        </button>
      </div>
    </div>
  );
};

export default Profile;



