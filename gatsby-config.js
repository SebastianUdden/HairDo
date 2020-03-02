/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `HairDo`,
    description: `Helping you find your hairstyle`,
    author: `Anne-Cathrine Josefsson, Sebastian Uddén & Sofia Moberg`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
          {
            family: `Nunito`,
            variants: [`400`, `700`],
          },
          {
            family: `Dosis`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hair Do`,
        short_name: `HairDo`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#ED4276`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

// {
//   family: `Dosis`,
//   variants: [`400`, `700`],
// },
// {
//   family: `Merienda One`,
//   variants: [`400`],
//   subsets: [`latin`],
// },
// {
//   family: `Indie Flower`,
//   variants: [`400`, `700`],
// },
// {
//   family: `Dancing Script`,
//   variants: [`400`, `700`],
// },
// {
//   family: `Pacifico`,
//   variants: [`400`, `700`],
// },
// {
//   family: `Courgette`,
//   variants: [`400`, `700`],
// },
// {
//   family: `Halant`,
//   variants: [`400`, `700`],
// },
// {
//   family: `Cinsel Decorative`,
//   variants: [`400`, `700`],
// },
