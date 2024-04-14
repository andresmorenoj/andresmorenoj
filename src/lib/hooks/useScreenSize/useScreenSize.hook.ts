import { TScreenSize } from '@constants/index';
import { getScreenSizeByWidth } from '@utils/index';

import { useScreenWidth } from '@hooks/useScreenWidth/useScreenWidth.hook';

interface UseScreenSizeResult {
  screenSize: TScreenSize;
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  isLargeScreen: boolean;
}

/**
 * useScreenSize
 * @returns the screen size category regarding its width
 */
export const useScreenSize = (): UseScreenSizeResult => {
  const width = useScreenWidth();
  const screenSize = getScreenSizeByWidth(width);
  const isSmallScreen = screenSize === 'small';
  const isMediumScreen = screenSize === 'medium';
  const isLargeScreen = screenSize === 'large';

  return { screenSize, isSmallScreen, isMediumScreen, isLargeScreen };
};
