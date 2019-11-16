var input_array =
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ];
function sort_object_list_by_field(input_array, age){
  var temp ;
  for(let index =0 ; index < input_array.length - 1 ; index++){
    if(input_array[index][age] > input_array[index+1][age]){
      temp = input_array[index];
      input_array[index]=input_array[index+1];
      input_array[index+1]= temp;
    }
  }
  console.log(input_array);
}
sort_object_list_by_field(input_array,'age');
