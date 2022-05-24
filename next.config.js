module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_FORM_SPARK_FORM_ID: process.env.NEXT_PUBLIC_FORM_SPARK_FORM_ID
  }
}
