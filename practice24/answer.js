var array1 =
  [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8]
  ];
var array2 =
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ];
var output = matrix_add(array1, array2);
console.log(`The matrix addition is ${output} `);
function matrix_add(array1,array2){
  var sumArray = [],innerArr =[],sum;

  // for(var a1Index = 0, a2Index =0 ; a1Index < array1.length && a2Index<array2.length; a1Index++,a2Index++ ){
  //   for(var innera1=0,innera2 =0; innera1 < array1[a1Index].length && innera2 < array2[a2Index]; innera1++,innera2++){
  //     sum =parseInt(array1[a1Index][innera1]) + parseInt(array2[a2Index][innera2]);
  //     innerArr.push(sum);
  //   }
  //   sumArray.push(innerArr);
  // }
  for(var i = 0 ; i < array1.length ; i++ ){
    for(var j=0; j < array1[i].length ; j++){
      sum = array1[i][j] + array2[i][j];
      innerArr.push(sum);
    }
    sumArray.push(innerArr);
    console.log('innerArray',innerArr);
    innerArr = [];
  }
  console.log(sumArray);
  return sumArray;
}
