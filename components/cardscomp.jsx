// pages/index.js
import React from 'react';
import Image from 'next/image';
import myImg3 from '../assets/Batches.png';
import myImg4 from '../assets/language.png';
import myImg2 from '../assets/rankings.png';
import myImg1 from '../assets/ratings.png';

const CardComponent = () => {
  const cards = [
    { image: myImg1, title: 'Ratings', value: '4.7/5' },
    { image: myImg2, title: 'Teacher Ranking', value: '#10' },
    { image: myImg3, title: 'Batches Scheduled', value: '2' },
    { image: myImg4, title: 'Language', value: '2' }
  ];

  return (
     <div className="w-[1200px] h-[223px] flex items-center bg-white">
        <div className="flex w-full h-full items-center justify-between px-4">
          {cards.map((card, index) => (
            <div key={index} className="w-64 h-56 bg-[#E6F0FF] flex flex-col items-center justify-center m-2 rounded-lg shadow-md">
              <div className="mb-4">
                <Image src={card.image} alt={card.title} className="h-12 w-12" />
              </div>
              <div className="text-xl font-semibold">{card.title}</div>
              <div className="text-2xl font-bold">{card.value}</div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default CardComponent;
