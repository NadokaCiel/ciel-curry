if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/ciel-curry.js')
} else {
  module.exports = require('./dist/ciel-curry.common.js')
}
