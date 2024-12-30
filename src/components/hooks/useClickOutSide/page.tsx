'use client';
import { useEffect } from 'react';
function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        ref.current &&
        event.target instanceof HTMLElement &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    }
    function escKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        callback();
      }
    }
    function handleScroll() {
      callback();
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keyup', escKey);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keyup', escKey);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, callback]);
}
export default useOutsideClick;
