/*  NOTES:

-YouTube API Key: AIzaSyDtojCPkQ2ACgmsGhTaiuyDIDkkxDgMG-c

-The endpoint is: "https://www.googleapis.com/youtube/v3/search"
https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyDtojCPkQ2ACgmsGhTaiuyDIDkkxDgMG-c&q=

-Need to pass the following in the params object:

	part: 'snippet'
	key: (your API key as a string)
	q: (your search term as a string)

-----------------------------------------------------------------------*/


'use strict';

//YouTube web API endpoint-the URL we are making a request to in order to retrieve data.
const YOUTUBE_SEARCH_URL= 'https://www.googleapis.com/youtube/v3/search';
const userKey= 'AIzaSyDtojCPkQ2ACgmsGhTaiuyDIDkkxDgMG-c';

//Function to get JSON from the YouTube API based on the user search term.
function getDataFromAPI( searchInput, callback ) {
  const query = {
    part:'snippet',
    key: userKey,
    q: searchInput,
    maxResults: 10,
    type: 'video' 
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback );

  console.log(`"getDataFromAPI" ran!`);
}

//Function to display the thumbnail image of the returned videos in '.js-results-search-results'.
function renderResults(result) {
  return `
    <ul>
      <li>    
        <h3 class="js-video-title">${result.snippet.title}</h3>
        <a href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank"><img class="js-result-img" src="${result.snippet.thumbnails.medium.url}" alt="${result.snippet.title}"></a>
        <a href="https://www.youtube.com/channel/${result.snippet.channelId}" target="_blank">More from this channel: ${result.snippet.channelTitle}</a>
      </li>
    </ul>  
  `;
  console.log('renderResults ran');
}


function displayYTData(data) {
  const results = data.items.map((item, index) => renderResults(item));
  $('.js-search-results').html(results);
}


//Function to recieve text input value from user.
function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromAPI(query, displayYTData);
  });
  console.log(`"watchSubmit" ran!`);
}

$(watchSubmit);


//Document Ready Function.
getDataFromAPI();
