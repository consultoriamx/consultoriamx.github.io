function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

$('button').click(function(){
  $('#slideout').toggleClass('on');
});
