import { useSearchParams } from "react-router-dom";

export const API_KEY = "AIzaSyDFxts_eQHnR78DjqIwwomP1YMXb1G45Og";

export const url =
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}&videoCategoryId=`;

export const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const LIVE_CHAT_COUNT = 250;

export const valueConverter = (value) => {
    if(value >= 1000000)
    {
        return Math.floor(value/100000) +"M"
    }else if(value >= 1000)
    {
        return Math.floor(value/1000) +"K"
    }else
    {
        return value;
    }
 }
 export const videoData_Api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;
export const comments_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${API_KEY}&videoId=`;