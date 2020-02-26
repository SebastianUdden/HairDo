const categories = require("./src/data/categories.json")
const articles = require("./src/data/articles.json")

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/homePage.js"),
    context: { categories },
  })

  categories.forEach(page => {
    createPage({
      path: page.slug,
      component: require.resolve("./src/templates/categoryPage.js"),
      context: {
        articles: articles.filter(article =>
          article.categories.some(
            category => category.toLowerCase() === page.title.toLowerCase()
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
