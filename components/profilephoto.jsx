// components/ProfilePhotoUpload.js
import React from 'react';

const ProfilePhotoUpload = () => {
  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">Profile Photo Upload</h3>
      <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
        {/* Placeholder for profile photo */}
        <span className="text-gray-500">Profile Photo</span>
      </div>
      <input
        type="file"
        accept="image/*"
        className="mt-4"
      />
    </div>
  );
};

export default ProfilePhotoUpload;
