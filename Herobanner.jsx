import { useState, useEffect } from 'react';
import sweety from '../assets/hero/sweety.jpg';
import rack from '../assets/hero/ak.jpg';
import aakali from '../assets/hero/sk.jpg';

const Herobanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (current === 0) {
        setCurrent(1);
      } else if (current === 1) {
        setCurrent(2);
      } else {
        setCurrent(0);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden">
      {current === 0 && (
        <img
          src={rack}
          alt="rack"
          className="w-full h-full object-cover"
        />
      )}
      {current === 1 && (
        <img
          src={sweety}
          alt="sweety naughty crazy"
          className="w-full h-full object-cover"
        />
      )}
      {current === 2 && (
        <img
          src={aakali}
          alt="aakali rajyam"
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute top-0 left-0 h-full flex flex-col justify-center px-10">
        {current === 0 && (
          <>
            <h1 className="text-white text-5xl font-bold">Rack</h1>
            <p className="text-gray-300 text-lg mt-2">TELUGU</p>
          </>
        )}
        {current === 1 && (
          <>
            <h1 className="text-white text-5xl font-bold">Sweety Naughty Crazy</h1>
            <p className="text-gray-300 text-lg mt-2">TAMIL</p>
          </>
        )}
        {current === 2 && (
          <>
            <h1 className="text-white text-5xl font-bold">Aakali Rajyam</h1>
            <p className="text-gray-300 text-lg mt-2">TELUGU | TAMIL</p>
          </>
        )}

        <div className="flex gap-2 mt-4">
          <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
            Premium
          </span>
          <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
            A
          </span>
        </div>

        <p className="text-gray-300 text-sm mt-3">
          2026 • 2h 20m • Romance Comedy
        </p>
      </div>

      <div className="absolute bottom-6 left-10 flex gap-2">
        <img
          src={rack}
          alt="rack"
          onClick={() => setCurrent(0)}
          className={`w-[100px] h-[60px] rounded-md object-cover cursor-pointer ${
            current === 0 ? 'border-2 border-white' : ''
          }`}
        />
        <img
          src={sweety}
          alt="sweety"
          onClick={() => setCurrent(1)}
          className={`w-[100px] h-[60px] rounded-md object-cover cursor-pointer ${
            current === 1 ? 'border-2 border-white' : ''
          }`}
        />
        <img
          src={aakali}
          alt="aakali rajyam"
          onClick={() => setCurrent(2)}
          className={`w-[100px] h-[60px] rounded-md object-cover cursor-pointer ${
            current === 2 ? 'border-2 border-white' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Herobanner;