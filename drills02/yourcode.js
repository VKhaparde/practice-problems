

function countOccurences(array,word){
  // for example: ['dog', 'cat', 'dog', 'pig', 'canary', 'cat', 'dog'], 'dog'
  // returns 3

  var count =0;
  for(var index =0;index<array.length;index++){
   if(array[index].toLocaleLowerCase()==word.toLocaleLowerCase()){
   // if(array[index].localeCompare(word)){
      count++;
    }
  }
  return count;
}
// question: `wordLengths: given an array of words, return an array of numbers representing the length of each word
//     For example:  fitWithinVal( ['canary','silly','dog','a','mellow'])
//         would return [6,5,3,1,6]
function wordLengths(wordsArray){
  var resArray =[];
for(var index=0;index<wordsArray.length;index++){
  var wordlength = wordsArray[index].length;
  resArray.push(wordlength);
}
return resArray;
}

function getMinMaxMean(numArray){
  var resObj={'min':'',
              'max': '',
              'mean':''};
   var sum=0;
    numArray.sort(function(a,b){return a-b});
    resObj['min'] = numArray[0];
    resObj['max'] = numArray[numArray.length - 1];
    for(var i=0;i<numArray.length;i++){
      sum+=numArray[i];
    }
 resObj['mean'] = sum / numArray.length ;
 return resObj;

}

function findMode(array){
  var num ;
  array.sort(function(a,b){return a - b });
for(var i=0;i<array.length;i++){
  if(array[i]==array[i+1])
  num =array[i];
}
return num;
}
