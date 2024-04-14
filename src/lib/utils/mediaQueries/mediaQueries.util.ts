import {
  TScreenSize,
  breakPointSizes,
} from "@constants/index";

/**
 * getScreenSizeByWidth
 * @param width - width of screen in pixels
 * @returns the screen size category acording to width
 */

export const getScreenSizeByWidth = (width: number): TScreenSize => {
  const widthBreakingPoint = Math.max(
    ...Object.values(breakPointSizes).filter((value) => value <= width)
  );

  const keys = Object.keys(breakPointSizes) as TScreenSize[];

  const finalScreenSize = keys.find(
    (screenSize) => breakPointSizes[screenSize] === widthBreakingPoint
  ) as TScreenSize;

  return finalScreenSize;
};

type ScreenSizeRelation = "biggerOrEqualThan" | "smallerOrEqualThan";

/**
 * getRelatedScreenSizes
 * @param relation - the relation to search other screen sizes
 * @param screenSize - screen size to compare with
 * @returns all related screen sizes
 */

export const getRelatedScreenSizes = (
  relation: ScreenSizeRelation,
  screenSize: TScreenSize
): TScreenSize[] => {
  const screenSizes = Object.keys(breakPointSizes) as TScreenSize[];
  const optionsMap: { [key in ScreenSizeRelation]: () => TScreenSize[] } = {
    biggerOrEqualThan: () =>
      screenSizes.filter(
        (breakPointSize) =>
          breakPointSizes[breakPointSize] >= breakPointSizes[screenSize]
      ),
    smallerOrEqualThan: () =>
      screenSizes.filter(
        (breakPointSize) =>
          breakPointSizes[breakPointSize] <= breakPointSizes[screenSize]
      ),
  };
  return optionsMap[relation]();
};

type MediaType = "desktopFirst" | "mobileFirst";

/**
 * getMedia
 * Calculates the media query string for css
 * @param type - if it is desktopFirst(uses max-width) or mobileFirst(uses min-width)
 * @param size - the desired size category for the query (small, medium, ...)
 * @returns the media query string
 */

export const getMedia = (type: MediaType, size: TScreenSize) => {
  /* ---------------------------- for mobile first ---------------------------- */
  if (type === "mobileFirst") return `(min-width: ${breakPointSizes[size]}px)`;
  /* ---------------------------- for desktop first --------------------------- */

  // we use an absurdly high number as upper bound for large screen size
  const infinity = 1000000000;
  const lowerBreakPoint = breakPointSizes[size];
  const upperBreakPoint = Math.min(
    ...Object.values(breakPointSizes).filter(
      (value) => value > lowerBreakPoint
    ),
    infinity
  );
  return `(max-width: ${upperBreakPoint - 1}px)`;
};
