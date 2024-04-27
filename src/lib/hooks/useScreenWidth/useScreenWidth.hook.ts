import { useState, useEffect } from 'react';

/**
 * useScreenWidth
 * @returns the width of the screen in pixels
 */

export const useScreenWidth = (): number => {
  const [width, setWidth] = useState(1300);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleWindowResize, false);

    if (screen?.orientation) screen.orientation.addEventListener('change', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleWindowResize, false);
			
      if (screen?.orientation) screen.orientation.removeEventListener('change', handleWindowResize);
    };
  }, []);

  return width;
};
