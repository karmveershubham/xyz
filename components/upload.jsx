// components/Upload.js
import React from 'react';
import GoogleMapsIntegration from './Gmap';
import ProfilePhotoUpload from './profilephoto';
import InstituteForm from './instituteForm';

const Upload = () => {
  return (
    <div className="max-w-[900px] mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex justify-between gap-6">
          <div className="flex-1">
            <GoogleMapsIntegration />
          </div>
          <div className="flex-1">
            <ProfilePhotoUpload />
          </div>
        </div>
        <InstituteForm />
      </div>
    </div>
  );
};

export default Upload;
