export const shadowTop = "rgba(0, 0, 0, 0.14)"
export const shadowSides = "rgba(0, 0, 0, 0.12)"
export const shadowBottom = "rgba(0, 0, 0, 0.2)"

const GREEN_THEME = {
  /* Base */
  grey: "#4F5150",
  greyExtraLight: "#d8e0dc",
  greyLight: "#ababab",
  greyDark: "#494d4b",
  greyExtraDark: "#383d3a",
  white: "#ffffff",

  /* Main Primary color */
  green: "#C5EBD2",
  greenExtraLight: "#FEFFFE",
  greenLight: "#E9F9EE",
  greenDark: "#99D6AE",
  greenExtraDark: "#69B884",

  /* Main Secondary color (1) */
  blue: "#C0DAE3",
  blueExtraLight: "#FEFFFF",
  blueLight: "#E7F3F7",
  blueDark: "#8FB8C5",
  blueExtraDark: "#5C8D9D",

  /* Main Secondary color (2) */
  beige: "#FFEBD6",
  beigeExtraLight: "#FFFFFE",
  beigeLight: "#FFF7EE",
  beigeDark: "#FFDCB7",
  beigeExtraDark: "#FCC78F",

  /* Main Complement color */
  pink: "#FFDCD6",
  pinkExtraLight: "#FFFEFE",
  pinkLight: "#FFF1EE",
  pinkDark: "#FFC2B7",
  pinkExtraDark: "#FCA08F",
}

export const theme = {
  header: {
    background: GREEN_THEME.green,
    text: GREEN_THEME.grey,
  },
  body: {
    heading: GREEN_THEME.grey,
    text: GREEN_THEME.grey,
  },
  footer: {
    background: GREEN_THEME.greyExtraLight,
    text: GREEN_THEME.grey,
  },
  articlePage: {
    subtitle: GREEN_THEME.greenExtraDark,
    divider: GREEN_THEME.grey,
  },
}
