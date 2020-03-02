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
  primary: "#ED4276", // pink
}

export const theme = {
  header: {
    background: THEME.primary,
    text: THEME.white,
  },
  search: {
    background: THEME.white,
    text: THEME.greyDark,
    border: THEME.primary,
  },
  sideMenu: {
    background: THEME.white,
    text: THEME.greyDark,
    border: THEME.primary,
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
    subtitle: THEME.primary,
    divider: THEME.grey,
  },
}
