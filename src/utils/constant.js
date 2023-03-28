export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=" +
  process.env.REACT_APP_GOOGLE_KEY;

export const YT_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=";

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=surfing&key=
