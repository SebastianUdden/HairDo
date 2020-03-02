export const shadowTop = "rgba(0, 0, 0, 0.14)"
export const shadowSides = "rgba(0, 0, 0, 0.12)"
export const shadowBottom = "rgba(0, 0, 0, 0.2)"

const THEME = {
  /* Base */
  grey: "#4F5150",
  greyExtraLight: "#eeeeee",
  greyLight: "#ababab",
  greyDark: "#494d4b",
  greyExtraDark: "#383d3a",
  white: "#ffffff",

  /* Main Primary color */
  pink: "#ED4276",
}

export const theme = {
  header: {
    background: THEME.pink,
    text: THEME.white,
  },
  sideMenu: {
    background: THEME.white,
    text: THEME.greyDark,
    border: THEME.pink,
  },
  body: {
    heading: THEME.grey,
    text: THEME.grey,
  },
  footer: {
    background: THEME.greyExtraLight,
    text: THEME.grey,
  },
  articlePage: {
    subtitle: THEME.pink,
    divider: THEME.grey,
  },
}
