module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_FORM_SPARK_FORM_ID: process.env.NEXT_PUBLIC_FORM_SPARK_FORM_ID
  }
}
