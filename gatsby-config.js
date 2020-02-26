/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
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
