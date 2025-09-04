'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LogoSliderProps {
  logo: string[]; // Accepts a 1D array now
}

const chunkArray = (array: string[], size: number) => {
  const result: string[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default function LogoAnimation({ logo }: LogoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Split logos into 4 columns dynamically
  const columns = chunkArray(logo, 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ul className="grid w-full max-w-max grid-cols-6 items-center justify-center gap-x-10">
      {columns.map((column, columnIndex) => (
        <li
          key={columnIndex}
          className="relative flex items-center justify-center overflow-hidden"
        >
          <div className="column-viewport">
            <ul
              className="logo-list"
              style={{
                transform: `translateY(-${currentIndex * 100}%)`,
                transitionDelay: `${columnIndex * 0.15}s`,
              }}
            >
              {Array.from({ length: currentIndex }).map((_, cycleIndex) =>
                column.map((logoItem, logoIndex) => (
                  <li
                    key={`${cycleIndex}-${logoIndex}`}
                    className="logo-item"
                    style={{
                      transform: `translateY(${(cycleIndex * column.length + logoIndex) * 100}%)`,
                    }}
                  >
                    <div className="flex h-full items-center justify-center">
                      <Image
                        src={logoItem}
                        alt="logo"
                        width={160}
                        height={100}
                        className="h-full !w-max object-contain p-4"
                      />
                    </div>
                  </li>
                )),
              )}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
