import { useEffect } from 'react';

export function useClickOutside(ref: any, onClickOutside: any) {
  useEffect(() => {
    
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener('mouseout', handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener('mouseout', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}