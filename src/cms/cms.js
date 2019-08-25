import CMS from "netlify-cms-app"

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
