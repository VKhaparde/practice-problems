var first_array = [3, -5, 15, 4];
var second_array = [3, 18, -5, -4];
var output = add_arrays(first_array, second_array);
console.log(output); //outputs [6,13,10,0];

function add_arrays(array1,array2){
  var sum, sumArray =[];
  for(let index = 0 ; index < array1.length ; index++){
    sum = array1[index]+ array2[index];
    sumArray.push(sum);
  }
  // console.log(sumArray);
  return sumArray;
}
