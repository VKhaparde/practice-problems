var input_array =
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ];
function sortObjectsByName(inputArray) {
  var temp;
  for (var index = 0; index < inputArray.length-1; index++) {
    for (var nameIndex = 0; nameIndex < inputArray[index]['name'].length; nameIndex++) {
      if (inputArray[index]['name'][nameIndex] > inputArray[index + 1]['name'][nameIndex]) {
        temp = inputArray[index];
        inputArray[index] = inputArray[index + 1];
        inputArray[index + 1] = temp;
        temp = null;
        nameIndex = 0;
        break;
      }
      else if (inputArray[index]['name'][nameIndex] < inputArray[index + 1]['name'][nameIndex]){
        break;
      }
    }
  }
  console.log(inputArray);
}
sortObjectsByName(input_array);
