'use client';

import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setScrollDirection('down');
        setIsVisible(false);
      } else {
        // Scrolling up
        setScrollDirection('up');
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollDirection, isVisible };
};
