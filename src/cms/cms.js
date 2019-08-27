import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"

CMS.registerMediaLibrary(cloudinary)

CMS.init({
  config: {
    media_library: {
      name: "cloudinary",
      output_filename_only: true,
      config: {
        cloud_name: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
      },
    },
  },
})
