'use client'

import React, { useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiExplode = () => {
  const [isExploding, setIsExploding] = useState(false);

  const handleButtonClick = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 3000); // Confetti will disappear after 3 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button 
        onClick={handleButtonClick} 
        className="bg-blue-500 text-white p-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Trigger Confetti
      </button>
      {isExploding && <Confetti />}
    </div>
  );
};

export default ConfettiExplode;
