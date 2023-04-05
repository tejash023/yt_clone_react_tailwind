export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_KEY;

export const YT_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=";

export const YT_AUTOCOMPLETE =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const buttonsList = [
  "All",
  "Music",
  "News",
  "India",
  "IPL",
  "React",
  "USA",
  "Ukraine",
  "COD",
  "Dhoni",
  "G20",
  "RCB",
  "Punjab",
  "Indian",
  "Aircraft",
];
