var input_array = [5, 3, 2, 5, 1];
function randomizeAnyInputArray(inputArray) {
  var temp;
  var len = inputArray.length;
  for (var index = 0; index < inputArray.length; index++) {
    var randomIndex = Math.floor(Math.random() * len);
    temp = inputArray[index];
    inputArray[index] = inputArray[randomIndex];
    inputArray[randomIndex] = temp;

  }
  return inputArray;
}
var outputArray = randomizeAnyInputArray(input_array);
console.log(outputArray);
