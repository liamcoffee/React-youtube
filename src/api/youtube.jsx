import axios from "axios";

const KEY = "AIzaSyC-jL7mKXAseV8n83bmmE5mkxbq49A0wts";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
