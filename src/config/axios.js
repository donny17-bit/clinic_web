import axios from "axios";

const instance = axios.create({
  baseURL: "https://inovglowplasticsurgery.com/api/public/",
});

export default instance;
