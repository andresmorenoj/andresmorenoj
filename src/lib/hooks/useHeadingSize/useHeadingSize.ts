import { useState, useEffect } from "react";

import { useScreenSize } from "@hooks/useScreenSize/useScreenSize.hook";
import { THeadingSize } from "@components/atoms";

export const useHeadingSize = () => {
  const { isLargeScreen, isMediumScreen, screenSize } = useScreenSize();
  const [headingSize, setHeadingSize] = useState<THeadingSize>("extraJumbo");

  const size = isLargeScreen 
    ? "extraJumbo"
    : isMediumScreen
    ? "jumbo"
    : "extraLarge";

  useEffect(() => {
    setHeadingSize(size);
  }, [screenSize, size]);

  return headingSize;
};
