import React from 'react';
import Registration from '../components/registeration'

const Form = () => {
  return (
    <div className="relative z-20 mx-auto -mt-[360px] rounded-lg">
      <div className="flex w-[1620px] h-[60px] bg-gray-800 bg-opacity-0 mb-[40px]">
        <div className="flex-1 flex items-center justify-start">
          <h2 className="text-white font-bold text-[32px]">Submit your Details to get Verified</h2>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <button className="bg-white text-black w-[331px] h-[58px] rounded">Sort By</button>
        </div>
      </div>

      <div className="bg-white w-[1620px] h-[1057px] rounded-lg">
        {/* //create component sand insert here */}
       <Registration/>
      </div>
    </div>
  );
};

export default Form;
