import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer your_access_token_here`, // Use a bearer token if applicable
  },
});

export default instance;
