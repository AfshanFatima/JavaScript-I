/* eslint-disable */

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
cb(collection[0]);
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  cb(collection.length);
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  cb(collection[collection.length - 1]);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const numSummed = x + y;
  cb(numSummed);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const numProduct = x * y;
  cb(numProduct);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(collection.includes(item));
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const itemChecked = [];
  collection.forEach(item, index) => {
    if (itemsChecked.indexOf(item) === -1) {
      itemChecked.push(item);
    }
  };
  cb(itemsChecked);
};

/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates,
};
