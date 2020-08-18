require("dotenv").config();


const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass({
  env: {
    API_URL: process.env.API_URL,
    API_GAME: process.env.API_GAME,
    SITE_URL: process.env.SITE_URL
  },
}))
