const axios = require("axios")
const fs = require("fs")

const { fmImagesToRelative } = require("gatsby-remark-relative-images")

// Implement “createPages” in order to generate a bunch of static images
// downloaded from cloudinary
exports.createPages = async ({ graphql, reporter }) => {
  // Query for markdown nodes to use in creating images.
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { collectionType: { eq: "menu-entries" } } }
      ) {
        edges {
          node {
            frontmatter {
              image
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  fs.mkdirSync(`${__dirname}/static/images/restaurant`, { recursive: true })

  // Create a local copy of every image
  result.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
    const imageUrl = `https://res.cloudinary.com/luismago/image/upload/c_fill,w_600,h_600/${node.frontmatter.image}`
    const response = await axios({
      method: "get",
      url: imageUrl,
      responseType: "stream",
    })

    response.data.pipe(
      fs.createWriteStream(
        `${__dirname}/static/images/${node.frontmatter.image}`
      )
    )
  })
}

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
