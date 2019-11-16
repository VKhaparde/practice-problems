
function sumArray(inputs){
  //debugger;
  var sum = 0;
    for (var i = 0; i < inputs.length; i++) {
      sum = sum +  inputs[i];
    }
  return sum;

}

function fitWithinVal(inputs,number){
  var sum=0,testSum=0,resArray=[];
  for(var i=0;i<inputs.length;i++){
  testSum +=  inputs[i];

  if(testSum <= number){
    sum = testSum;
    resArray.push(inputs[i]) ;
  }
  else{
    sum =testSum - inputs[i];
    testSum = sum;
  }
  }
  return resArray;
  }

function getAllNamesShorterThan(names,targetnum){
  var resultArray =[];
  for(var i =0;i < names.length;i++){
    if(names[i].length < targetnum){
      resultArray.push(names[i])
    }
  }
  return resultArray;
}

// { 'familyName' : 'Paschal',
// 'givenName': 'Daniel',
// 'greeting': 'Mr.',
// 'age': 43,
//  'height' : 185,
//   'colors': { 'eye': 'blue', 'hair': 'brown' },
//    'home address': { 'streetNumber': '9200',
//    'streetName': 'Irvine Center Drive',
//     'state': 'CA',
//     'zip': 92618,
//     'city': 'Irvine' } }
function makeLabel(inputsObj){

 var result = inputsObj.greeting+" "+inputsObj.givenName+" "+inputsObj.familyName+"\n"+
           +inputsObj['home address'].streetNumber+" "+inputsObj['home address'].streetName+"\n"+
           inputsObj['home address'].city+", "+inputsObj['home address'].state+" "+inputsObj['home address'].zip
return result;
}
