// components/InstituteForm.js
import React from 'react';

const InstituteForm = () => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Institute Details</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col mb-4">
          <label className="text-sm font-semibold mb-2 uppercase">Institute Name</label>
          <input
            type="text"
            placeholder="Enter institute name"
            className="w-full h-[58px] px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="text-sm font-semibold mb-2 uppercase">Institute Logo</label>
          <input
            type="file"
            accept="image/*"
            className="ml-4"
          />
          <button className="ml-4 bg-[#17A8FC] text-white px-4 py-2 rounded-lg">
            Upload
          </button>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-sm font-semibold mb-2 uppercase">Tell About Institute</label>
          <textarea
            placeholder="Describe the institute"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default InstituteForm;
