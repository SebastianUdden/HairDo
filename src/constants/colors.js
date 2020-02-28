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
  green: "#4D7059",
  greenExtraLight: "#C5D7CB",
  greenLight: "#789983",
  greenDark: "#26402F",
  greenExtraDark: "#10301B",

  /* Main Secondary color (1) */
  blue: "#43585F",
  blueExtraLight: "#B7C3C7",
  blueLight: "#677C82",
  blueDark: "#213136",
  blueExtraDark: "#0F2229",

  /* Main Secondary color (2) */
  beige: "#998169",
  beigeExtraLight: "#FFF5EA",
  beigeLight: "#D1BBA4",
  beigeDark: "#574634",
  beigeExtraDark: "#412C16",

  /* Main Complement color */
  pink: "#997069",
  pinkExtraLight: "#FFEDEA",
  pinkLight: "#D1ABA4",
  pinkDark: "#573A34",
  pinkExtraDark: "#411C16",
}

export const theme = {
  header: {
    background: GREEN_THEME.green,
    text: GREEN_THEME.greenExtraLight,
  },
  sideMenu: {
    background: GREEN_THEME.pinkDark,
    text: GREEN_THEME.beigeExtraLight,
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
