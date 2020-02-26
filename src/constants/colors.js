export const shadowTop = "rgba(0, 0, 0, 0.14)"
export const shadowSides = "rgba(0, 0, 0, 0.12)"
export const shadowBottom = "rgba(0, 0, 0, 0.2)"

const GREEN_THEME = {
  base: {
    grey: "#4F5150",
    greyExtraLight: "#d8e0dc",
    greyLight: "#ababab",
    greyDark: "#494d4b",
    greyExtraDark: "#383d3a",
    white: "#ffffff",
  },
  primary: {
    green: "#C5EBD2" /* Main Primary color */,
    greenExtraLight: "#FEFFFE",
    greenLight: "#E9F9EE",
    greenDark: "#99D6AE",
    greenExtraDark: "#69B884",
  },
  secondary: {
    blue: "#C0DAE3" /* Main Secondary color (1) */,
    blueExtraLight: "#FEFFFF",
    blueLight: "#E7F3F7",
    blueDark: "#8FB8C5",
    blueExtraDark: "#5C8D9D",
  },
  secondary2: {
    beige: "#FFEBD6" /* Main Secondary color (2) */,
    beigeExtraLight: "#FFFFFE",
    beigeLight: "#FFF7EE",
    beigeDark: "#FFDCB7",
    beigeExtraDark: "#FCC78F",
  },
  complement: {
    pink: "#FFDCD6" /* Main Complement color */,
    pinkExtraLight: "#FFFEFE",
    pinkLight: "#FFF1EE",
    pinkDark: "#FFC2B7",
    pinkExtraDark: "#FCA08F",
  },
}

export const theme = {
  header: {
    background: GREEN_THEME.primary.green,
    text: GREEN_THEME.base.grey,
  },
  body: {
    heading: GREEN_THEME.base.grey,
    text: GREEN_THEME.base.grey,
  },
  footer: {
    background: GREEN_THEME.base.greyExtraLight,
    text: GREEN_THEME.base.grey,
  },
}
