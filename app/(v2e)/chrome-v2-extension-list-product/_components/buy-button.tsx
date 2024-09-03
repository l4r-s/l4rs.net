'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import Confetti from 'react-dom-confetti';

const BuyButton = ({ url }: { url: string }) => {
  const router = useRouter();
  const [isExploding, setIsExploding] = React.useState(false);

  const handleBuyClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
      router.push(url);
    }, 600);
  };

  return (
    <div className="mb-4 mx-auto justify-end">
      <button onClick={handleBuyClick} className="w-full font-bold max-w-lg mx-auto py-4 bg-green-500 text-white p-2 text-xl rounded-md shadow-lg hover:bg-green-600 transition duration-300 block">
        Unlock 5,000+ Opportunities Now!
        {/* <span className="block text-base mt-2">Grab Your Copy Today and Start Building Profitable Extensions! 💸</span> */}
        <div className="flex justify-center items-center">
          <Confetti
            active={isExploding}
            config={{
              angle: 90,
              spread: 360,
              startVelocity: 40,
              elementCount: 70,
              dragFriction: 0.12,
              duration: 3000,
              stagger: 3,
              width: "10px",
              height: "10px",
              colors: ["#a864fd", "#22c1c3", "#ffce42", "#ff4081", "#32cd32", "#ff4500", "#1e90ff", "#ff69b4"],
            }}
          />
        </div>
      </button>
      <p className="text-center text-sm text-gray-500 mt-1">
        Start monetizing obsolete extensions today!
      </p>
    </div>
  );
};

export default BuyButton;