/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

// const arr = [
//   { name: "Elie" },
//   { name: "Tim" },
//   { name: "Matt" },
//   { name: "Colt" },
// ];
// extractValue(arr, "name"); // ['Elie', 'Tim', 'Matt', 'Colt']

function extractValue(arr, key) {
  return arr.reduce(function (accum, val) {
    //if the item doesn't match the search key, return accum
    if (!val[key]) {
      return accum; // start again here
    }

    accum.push(val[key]); // push matches to array
    return accum; // return new accum
  }, []); // starting accum empty array to store values
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

// ! go over with mentor
// ! how does this work exactly?
function vowelCount(str) {
  // split up string into indiv letters
  let splitArr = str.split("");
  //define vowels
  const vowels = "aeiou";

  return splitArr.reduce(function (acc, char) {
    // case sensitive
    let lowerCasedLetter = char.toLowerCase();

    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (acc[lowerCasedLetter]) {
        acc[lowerCasedLetter]++;
      } else {
        acc[lowerCasedLetter] = 1;
      }
    }

    return acc;
  }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

// ! how does this work?
// ! unsure when to use acc and nextVal in these situations
function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, nextVal) {
    nextVal[key] = value;
    acc.push(nextVal);
    return acc;
  }, []);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

// ! go over w mentor how this works exactly
// ! we are writing a reusable piece of code that can accept any function as the comparison to separate one arr into two separate ones.
// function partition(arr, callback) {
//   return arr.reduce(
//     function (acc, val) {
//       acc[callback(val, i, arr) ? 0 : 1].push(val);
//       return acc;
//     }[([], [])]
//   );
// }

function partition(arr, callback) {
  //?best practices for naming next and acc?
  return arr.reduce(
    function (acc, next) {
      if (callback(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}
