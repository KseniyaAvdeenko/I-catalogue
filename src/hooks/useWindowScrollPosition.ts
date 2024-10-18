import {useEffect, useState} from "react";

export const useWindowScrollPosition = () => {
  const [windowScrollY, setWindowScrollY] = useState<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScrollY(window.window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return windowScrollY;
};