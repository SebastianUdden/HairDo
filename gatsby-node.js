const categories = require("./src/data/categories.json")
const articles = require("./src/data/articles.json")
const home = require("./src/data/home.json")

const sortByCreatedAt = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/homePage.js"),
    context: {
      articles: articles.sort(sortByCreatedAt).slice(0, 4),
      categories,
      home,
    },
  })

  categories.forEach(page => {
    createPage({
      path: page.slug,
      component: require.resolve("./src/templates/categoryPage.js"),
      context: {
        articles: articles.filter(article =>
          article.categories.some(
            category => category.toLowerCase() === page.hero.title.toLowerCase()
          )
        ),
        categories,
        page,
      },
    })
  })

  articles.forEach(page => {
    createPage({
      path: page.slug,
      component: require.resolve("./src/templates/articlePage.js"),
      context: { categories, page },
    })
  })
}
