import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaLinkedin } from 'react-icons/fa';

const BecomeInstructor = () => {
  return (
    <div className="max-w-[700px] mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-8">Become Instructor</h2>

      <div className="flex justify-between gap-6 mb-6">
        <div className="relative flex-1">
          <label className="block text-sm font-semibold mb-2 uppercase">First Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-[58px] pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 " />
        </div>
        <div className="relative flex-1">
          <label className="block text-sm font-semibold mb-2 uppercase">Last Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-[58px] pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="relative mb-6">
        <label className="block text-sm font-semibold mb-2 uppercase">Qualifications</label>
        <input
          type="text"
          placeholder="Enter your qualifications"
          className="w-full h-[58px] pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaGraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="relative mb-6">
        <label className="block text-sm font-semibold mb-2 uppercase">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full h-[58px] pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="relative mb-6">
        <label className="block text-sm font-semibold mb-2 uppercase">Mobile Number</label>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          className="w-full h-[58px] pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="relative mb-6">
        <label className="block text-sm font-semibold mb-2 uppercase">Teaching Experience</label>
        <input
          type="text"
          placeholder="Enter your teaching experience in years"
          className="w-full h-[58px] pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="relative mb-6">
        <label className="block text-sm font-semibold mb-2 uppercase">LinkedIn Profile</label>
        <input
          type="url"
          placeholder="Enter your LinkedIn profile link"
          className="w-full h-[58px] pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </a>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2 uppercase">
          Are you currently working somewhere?*
        </label>
        <div className="flex items-center space-x-8">
          <label className="flex items-center">
            <input type="radio" name="working" value="yes" className="mr-2"/>
            Yes
          </label>
          <label className="flex items-center">
            <input type="radio" name="working" value="no" className="mr-2"/>
            No
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-8 space-x-4">
        <button className="bg-gray-200 text-gray-700 w-[331px] h-[58px] rounded-lg">Cancel</button>
        <button className="bg-[#17A8FC] text-white w-[331px] h-[58px] rounded-lg">Submit Details</button>
      </div>
    </div>
  );
};

export default BecomeInstructor;
