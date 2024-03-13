import axios from "axios";
import Vue from "vue";
const client = axios.create();


client.defaults.baseURL = "https://www.googleapis.com/books/v1/"


client.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.url = config.url + '?key=AIzaSyBv7dXolJMozxbE8TK5jMS5m18F8c8wE8A'
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
Vue.prototype.$client = client;
export { client };