var factor_number = 10;
var output = find_factors(factor_number);
console.log(`Factors of ${factor_number} are ${output}`);
function find_factors(num){
  let index = num;
  var factors =[];
  while(index){
    if(!(num%index)){
      factors.push(index);
    }
    index--;
  }
  factors.sort(function(a,b){return a-b});
  return factors;
}
