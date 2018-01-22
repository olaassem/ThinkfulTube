/*  NOTES:

-YouTube API Key: AIzaSyDtojCPkQ2ACgmsGhTaiuyDIDkkxDgMG-c

-The endpoint is: "https://www.googleapis.com/youtube/v3/search"

-Need to pass the following in the params object:

	part: 'snippet'
	key: (your API key as a string)
	q: (your search term as a string)

-----------------------------------------------------------------------*/


'use strict';

//YouTube web API endpoint-the URL we are making a request to in order to retrieve data.
const YOUTUBE_SEARCH_URL= 'https://www.googleapis.com/youtube/v3/search';



//Function to recieve text input value from user.
function submitInput(){
	$(".js-submit").click(function(event){
		event.preventDefault();
		const searchInput= $('#query').val();
		getDataFromAPI(searchInput, renderResults);
	});
	console.log(`"submitInput" ran!`)
}



//Function to get JSON from the YouTube API based on the user search term.
function getDataFromAPI(searchTerm, callback) {
  const query = {
    part:'snippet',
    key: 'AIzaSyDtojCPkQ2ACgmsGhTaiuyDIDkkxDgMG-c',
    q: `${searchTerm}`,
    maxResults: 10,
    type: 'video' 
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
  console.log(`"getDataFromAPI" ran!`)
}




//Function to display the thumbnail image of the returned videos in '.js-results-search-results'.
function renderResults(){
}





//Document Ready Function.
function runApp(){
	submitInput();
	getDataFromAPI();
}

runApp();