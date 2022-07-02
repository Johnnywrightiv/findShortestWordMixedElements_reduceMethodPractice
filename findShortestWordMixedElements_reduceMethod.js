/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.


*/

// 2nd Attempt - everyone said to use .reduce on stackoverflow. Good practice to learn reduce syntax and ternary opperator. 
function findShortestWordAmongMixedElements(arr) {
  var newArr = [];
  arr.forEach(element => {
    typeof element === 'string' ? newArr.push(element) : null;
  });
  return newArr.reduce(function (previousValue, currentValue) {
    return previousValue.length <= currentValue.length ? previousValue : currentValue;
  });
}


// 1st Attempt - my inital approach using .forEach and .sort
  // let newArr = [];
  // arr.forEach(element => {
  //   if (typeof element === 'string') {
  //     newArr.push(element);
  //   }
  // });
  // newArr.sort(function (a, b){
  //   return a.length - b.length
  // });

  // return newArr[0];

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three', 'one']);
console.log(output); // --> 'two'