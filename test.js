const assert = require('assert')
const filterArray = require('./src/filterArray')

describe('Filter array part 1', () => {
  it('Should return filtered array_01', () => {
    const arrayToFilter = [1, 2, 3, 4, 5, 6, 7, 8]
    assert.deepEqual(filterArray(arrayToFilter), [1, 3, 5, 7])
  })

  it('Should return filtered array_02', () => {
    const arrayToFilter = [14, 52, 33, 11, 43, 412, 51511]
    assert.deepEqual(filterArray(arrayToFilter), [33, 11, 43, 51511])
  })
})