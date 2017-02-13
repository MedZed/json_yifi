
function ajax_get_json(){
	var results = document.getElementById("results");
  $.getJSON('https://yts.ag/api/v2/list_movies.json?minimum_rating=8&page=2&limit=10', function(yts_data) {
  //yts_data is the JSON string
  results.innerHTML = "<h1>List of movies from YTS</h1>";
  i=0;
			for(var obj in yts_data["data"]["movies"]){
      // document.write(i);
      // document.write(yts_data["data"]["movies"][0]["medium_cover_image"]);
			results.innerHTML += "<img src='"+yts_data["data"]["movies"][i]["medium_cover_image"]+"'<hr /> ";
      i++;

			}

});


    results.innerHTML = "requesting...";
}