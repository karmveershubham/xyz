import React from 'react';
import CardComponent from './cardscomp';
import WorkEducation from './workEdu';
import Profile from './profile';

const AboutComponent = () => {
  return (
    <div className="relative z-20 mx-auto -mt-[360px] rounded-lg w-[1650px] h-[982px] bg-gray-100">
      <div className="flex w-full h-full p-6">
        <div className="flex-[0.25] "> 
            <Profile/>
        </div>
        <div className="flex-[0.75] flex flex-col">
          <div className="bg-white rounded-lg flex-1">
            <WorkEducation />
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;



// import React from 'react';
// import CardComponent from './cardscomp';
// import WorkEducation from './workEdu';
// import Profile from './profile';

// const AboutComponent = () => {
//   return (
//     <div className="relative z-20 mx-auto -mt-[360px] rounded-lg w-[1650px] h-[982px] bg-gray-100">
//       <div className="flex w-full h-full">
//             <Profile/>
//         </div>
//         <div className="flex-[0.75] flex flex-col p-6">
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex-1">
//             <WorkEducation />
//             <CardComponent />
//           </div>
//         </div>
//     </div>
    
//   );
// };

// export default AboutComponent;

