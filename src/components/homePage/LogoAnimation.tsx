'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChunkArray } from '../utils/helper/ChunkArray';

interface LogoSliderProps {
  logo: string[]; // Accepts a 1D array now
}

export default function LogoAnimation({ logo }: LogoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Split logos into 4 columns dynamically
  const columnsDeskTop = ChunkArray(logo, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ul className="grid w-full max-w-full grid-cols-3 items-center justify-center gap-3 lg:grid-cols-6 lg:gap-x-6">
        {columnsDeskTop.map((column, columnIndex) => (
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
                      <div className="flex h-full w-full items-center justify-center p-1.5">
                        <Image
                          src={logoItem}
                          alt="logo"
                          width={150}
                          height={60}
                          className="!w-max max-w-[150px] object-contain"
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
      {/* <ul className="w-full max-w-full grid-cols-3 items-center justify-center gap-x-10 lg:grid lg:grid-cols-6">
        {columnsDeskTop.map((column, columnIndex) => (
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
                      <div className="P-4 flex h-full w-full items-center justify-center">
                        <Image
                          src={logoItem}
                          alt="logo"
                          width={150}
                          height={100}
                          className="h-full !w-max max-w-[100px] object-contain"
                        />
                      </div>
                    </li>
                  )),
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul> */}
    </>
  );
}
