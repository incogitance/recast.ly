import YOUTUBE_API_KEY from '../config/youtube.js';
var searchYouTube = function (options, callback) {
  var defaults = {
    key: YOUTUBE_API_KEY,
    q: "dogs",
    part: 'snippet',
    maxResults: 5,
  }
  options.q = options.query || defaults.q;
  options.maxResults = options.max || defaults.maxResults;
  options.key = options.key || YOUTUBE_API_KEY;
  options.part = options.part || 'snippet';
  options.type = 'video';
  //options.videoEmbeddable = 'true';

  console.log('before', options);
  //options = $.extend(options, defaults )
  console.log('after', options);


  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options, //
    timeout: 5000,
    contentType: 'application/json',
    success:  function (data) {callback(data.items)} || function (data) {console.log(data); console.log(data.items) },
    error: function (error) {
      console.error('youtubeSearch: Failed to fetch messages', error);
    }
  });




};

export default searchYouTube;
