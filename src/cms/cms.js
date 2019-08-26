import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"

CMS.registerMediaLibrary(cloudinary)

CMS.init({
  config: {
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: `${processs.env.GATSBY_CLOUDINARY_CLOUD_NAME}`,
        api_key: `${processs.env.GATSBY_CLOUDINARY_API_KEY}`,
      },
    },
  },
})
