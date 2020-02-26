export const TINY = 320
export const SMALL = 560
export const MEDIUM = 960
export const LARGE = 1600

export const MEDIA_TINY = "@media (max-width: " + TINY + "px)"
export const MEDIA_SMALL =
  "@media (min-width: " + (TINY + 1) + "px) and (max-width: " + SMALL + "px)"
export const MEDIA_MEDIUM =
  "@media (min-width: " + (SMALL + 1) + "px) and (max-width: " + MEDIUM + "px)"
export const MEDIA_LARGE =
  "@media (min-width: " + (MEDIUM + 1) + "px) and (max-width: " + LARGE + "px)"
export const MEDIA_X_LARGE = "@media (min-width: " + (LARGE + 1) + "px)"

export const MEDIA_MIN_MEDIUM = "@media (min-width: " + (SMALL + 1) + "px)"
