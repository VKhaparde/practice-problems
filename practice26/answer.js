var haystack = ['cat', 'dog', 'bird', 'turtle', 'lizard'];
var needle = ['dog', 'lizard', 'flower', 'monkey', 'unicorn']

var output = search_array(haystack, needle);
function search_array(haystack, needle) {
  var resArray = [];
  for (let nee = 0; nee < needle.length; nee++) {
    for (let hay = 0; hay < haystack.length; hay++) {
      if (needle[nee] === haystack[hay]) {
        resArray.push(needle[nee]);
      }
    }
  }
  return resArray;
}
console.log(`OutputArray : ${output}`);
