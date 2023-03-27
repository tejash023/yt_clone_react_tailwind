const GOOGLE_API_KEY = "AIzaSyCTm6X33fW032Vav24W6vhpuI4wnn8BqO0";

export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=" +
  GOOGLE_API_KEY;
