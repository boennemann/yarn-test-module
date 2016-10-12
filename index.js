var truthyValue = require('@boennemann/semver-fail-module')

module.exports = function () {
  if (!truthyValue) {
    throw new Error('yarn did provide a false sense of security')
  }

  return truthyValue
}
