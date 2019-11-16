

function removeClassFromElement(){
  $('.wasRed').removeClass('wasRed');
  $('#redNotBlue').removeClass('wasBlue');
  $('.wasGreen').removeClass('wasGreen').css('color','green');

}

function toggleClassOnElement(){
  $('.needBack').toggleClass('willBeGreenText');
  $('#redNotBlue').addClass('wasRed');
  $('.limeBorder').toggleClass('limeBorder');

  }

function hideElements(  ){
  $('#hideMe').hide();
  $('#removeChildren').empty();
  $('#removeElement').remove();
}

function addAttributeToElement( ){
  $('.addID').attr('id','blueID');
  $('#targetImg').attr('src','https://myperbole.files.wordpress.com/2015/04/good-job.png?w=665');
}

function putPosInElement(  ){
  //x: 30px<br>y: 50px
  console.log($('#getPos').position());
  var positionObj = $('#getPos').position();
  $('#getPos').html('x: ' + positionObj.left +'px <br> y: '+positionObj.top+'px');
  return positionObj;


}
