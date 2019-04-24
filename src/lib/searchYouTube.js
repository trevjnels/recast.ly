var searchYouTube = (options, callback) => {
  // TODO
  //interaction
  var { query, max, key } = options; 

  var fullURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${key}`;
  console.log("WE SEARCHED YOUTUBE ", fullURL)
  $.get(fullURL, callback)
  return fullURL;
  // jQuery.get( url [, data ] [, success ] [, dataType ] )
};

export default searchYouTube;


// var baseURL = 'https://www.googleapis.com/youtube/v3/search:list';
// var parameters = 'snippet'
// var forContentOwner = false;
// var forDeveloper = false;
// var forMine = false;

  //`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${}&type=video&key={YOUR_API_KEY}`


  // Qparameter
  // The q parameter specifies the query term to search for.
  
  // Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either "boating" or "sailing", set the q parameter value to boating|sailing. Similarly, to search for videos matching either "boating" or "sailing" but not "fishing", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.


  // { SAMPLE RESPONSE
  //   "kind": "youtube#searchListResponse",
  //   "etag": etag,
  //   "nextPageToken": string,
  //   "prevPageToken": string,
  //   "regionCode": string,
  //   "pageInfo": {
  //     "totalResults": integer,
  //     "resultsPerPage": integer
  //   },
  //   "items": [
  //     search Resource
  //   ]
  // }
     
  
