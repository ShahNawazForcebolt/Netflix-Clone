import axios from "axios";

/** base url to make requests to the movie database */
const instance = axios.create({
  // headers = { "cors": "Access-Control-Allow-Origin" },

  // method: 'get',
  baseURL: "https://api.themoviedb.org/3",

  // headers: {}
  // Access-Control-Allow-Origin: "https://api.themoviedb.org/3"
});

export default instance;
