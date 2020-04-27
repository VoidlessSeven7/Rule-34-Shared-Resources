// Load boorus from JSON
import booruList from '../booru-list.json'

/**
 * Returns an Array of filtered results
 * @param {boolean | string} value Value to compare
 * @param {string} key Key of the object
 * @param {array} list Array to compare results
 */
function findBoorusWithValueByKey(value, key = 'short', list = booruList) {
  return list.filter((booru) => booru[key] === value)
}

/**
 * Returns an Array of multiple filtered results
 * @param {boolean | string} valueArray Array of values to compare
 * @param {string} key Key of the object
 * @param {array} list Array to compare results
 */
function removeBoorusWithValuesByKey(
  valueArray,
  key = 'short',
  list = booruList
) {
  return list.filter((booru) => !valueArray.includes(booru[key]))
}

// Some presets
const booruListNSFW = findBoorusWithValueByKey(true, 'nsfw')

// Exported values
export {
  booruList,
  booruListNSFW,
  findBoorusWithValueByKey,
  removeBoorusWithValuesByKey,
}

// Example usage
// console.log(booruListNSFW, booruListNSFW.length)
// console.log(findBoorusWithValueByKey('xxx', 'short'))
// console.log(removeBoorusWithValuesByKey(['xxx', 'paheal'], 'short', booruListNSFW))