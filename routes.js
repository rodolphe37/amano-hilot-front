const routes = require('next-routes')

module.exports = routes()
.add('blog_page', '/blog/:id')
