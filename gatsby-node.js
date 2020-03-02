const categories = require("./src/data/categories.json")
const articles = require("./src/data/articles.json")
const home = require("./src/data/home.json")

const sortByCreatedAt = (a, b) => new Date(b.createdAt) - new Date(a.createdAt)

const getSubCategories = categories => {
  if (!categories) return []
  const subCategories = categories.reduce(
    (accumulator, category) => [
      ...accumulator,
      ...(category.subCategories || []),
    ],
    []
  )
  return [...new Set(subCategories)]
}

const getHeadCategories = (categories, subCategories) =>
  categories
    .filter(category => !subCategories.some(x => x === category.slug))
    .map(category => ({
      ...category,
      subCategories: category.subCategories
        ? categories.filter(x => category.subCategories.some(y => y === x.slug))
        : [],
    }))

exports.createPages = async ({ actions: { createPage } }) => {
  const subCategories = getSubCategories(categories)
  const headCategories = getHeadCategories(categories, subCategories)

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/homePage.js"),
    context: {
      articles: articles.sort(sortByCreatedAt).slice(0, 4),
      categories: headCategories,
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
        categories: headCategories,
        page,
      },
    })
  })

  articles.forEach(page => {
    createPage({
      path: page.slug,
      component: require.resolve("./src/templates/articlePage.js"),
      context: { categories: headCategories, page },
    })
  })
}
