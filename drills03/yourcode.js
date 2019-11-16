

function getPath(str){
  // question: `getPath: given a path string, return an array with the different parts of the path
  //   for example: 'folder1/folder2/folder3'
  //       returns ['folder1','folder2','folder3']
  var resArray = [],result = '';
   for(var i=0;i<str.length;i++){
    var x = str.lastIndexOf('/');
    console.log(x);
    result = str.slice(x+1);
    str = str.slice(0,x);
    console.log(str);
    console.log(result);
    resArray.unshift(result);
   }
   return resArray;
}

function getPathParts(str){
  // getPathParts: Given a full URL string, break it up into parts in an object
  // For example: 'http://localhost:8000/happy/go/lucky/file.html'
  // would return {
  //   protocol: 'http',
  //   host: 'localhost',
  //   port: 8000,
  //   path: '/happy/go/lucky',
  //   file: 'file.html'
  // }
  // var firstSplit = str.split('//');
  // console.log(firstSplit);
  // var secondsplit = firstSplit[1].split('/');
  // console.log(secondsplit);
  // var resultArray = {};
  // var protocol = firstSplit[0];
  // resultArray.protocol = protocol.pop();
  // resultArray.host = secondsplit[0].split(':')[0];
  // resultArray.port = secondsplit[0].split(':')[1];
  // resultArray.path =secondsplit[1]+secondsplit[2];
  // resultArray.file =secondsplit[secondsplit.length -1];
  // return resultArray;


}

function getCapitalCount(wordsArray){
  // question: `getCapitalCount: given an array of words,
  // return a count of how many start with capital letters,
  // For example: ['it','will','not','Be','long','Till','we','Are']
  // returns: 3`,
  //   testVals: {
  //   inputs: [
  //     [['oh', 'what', 'A', 'glorious', 'Day']],
  //     [['YOU', 'KNOW', 'it']],
  //     [['not', 'a', 'sausage']]
  //   ],
  //     outputs: [
  //       2, 2, 0
  //     ]
  var count =0;
  for(var index = 0 ; index < wordsArray.length;index++){
    var word = wordsArray[index];
    if(word[0] == word[0].toUpperCase()){
      count++;
    }

  }
  return count;
}

function correctCalcChecker(objArray){
//   correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations
//   for example: [
//     { num1: 3, num2: 3, op: '/', result: 3 },
//     { num1: 12, num2: 4, op: '-', result: 8 },
//     { num1: 2, num2: 3, op: '+', result: 5 },
//     { num1: -5, num2: -2, op: '*', result: 10 }
//   ]
//   returns[
//     { num1: 12, num2: 4, op: '-', result: 8 },
//     { num1: 2, num2: 3, op: '+', result: 5 }
//   ]

var outputArray =[];
for(var index = 0 ; index < objArray.length ; index++){
  var obj  = objArray[index];
  var result;
    switch(obj.op){
      case '+':
        result = obj.num1 + obj.num2;
        break;
      case '-':
        result = obj.num1 - obj.num2;
        break;
      case '*':
        result = obj.num1 * obj.num2;
        break;
      case '/':
        result = obj.num1 / obj.num2;
        break;
    }
    if (result === obj.result){
      outputArray.push(obj);
    }
}
return outputArray;
}



function doMath(){

}
