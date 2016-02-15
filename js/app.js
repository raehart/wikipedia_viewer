//when search button is clicked
$("#search").click(function(){
  var value = $("#searchbox").val();
  var searchValue = encodeURI(value);
  $("#results").html("");
   var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+searchValue+"&format=json&callback=?"
  $.getJSON(url, function(data){
  console.log(data);
  	for(i = 0; i < 10 ; i++) {
  		console.log(data.query.search[i]);
  		 $("#results").append("<div> <a href='//en.wikipedia.org/wiki/"+value+"'> <h4>" + data.query.search[i].title + "</h4>" + data.query.search[i].snippet + "</a> </div>")
  		 }

  }) 
})

//or user hits enter
$(document).keypress(function(e) {
    if(e.which == 13) {
    var value = $("#searchbox").val();
    var searchValue = encodeURI(value);
  $("#results").html("");
   var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+searchValue+"&format=json&callback=?"
  $.getJSON(url, function(data){
  console.log(data);
  	for(i = 0; i < 10 ; i++) {
  		console.log(data.query.search[i]);
  		 $("#results").append("<div> <a href='//en.wikipedia.org/wiki/"+value+"'> <h4>" + data.query.search[i].title + "</h4>" + data.query.search[i].snippet + "</a> </div>")
  		 }

  }) 
    }
});


