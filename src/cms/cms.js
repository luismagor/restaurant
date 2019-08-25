import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"

CMS.registerMediaLibrary(cloudinary)

CMS.init({
  config: {
    media_library: {
      name: "cloudinary",
      config: {
        cloud_name: `${process.env.CLOUDINARY_USER}`,
        api_key: `${process.env.CLOUDINARY_API_KEY}`,
      },
    },
  },
})
