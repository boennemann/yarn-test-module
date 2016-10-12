var assert = require('assert')
var testModule = require('./')

assert.doesNotThrow(testModule)
assert.ok(testModule())
