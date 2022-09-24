import axios from "axios";

export default {
  getAllPosts: () => axios.get(`jsonplaceholder.typicode.com/posts`),
}