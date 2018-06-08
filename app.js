var app = function (){
  var questionButton = document.getElementById("stockName");
  var search = document.getElementById("searchButton");


	search.onclick = function () {

	  if(questionButton.value == 'Apple'){
	  	console.log('hej');
	  }
	}
}

app()