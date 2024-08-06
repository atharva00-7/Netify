import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      accept: 'application/json',
<<<<<<< HEAD
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
=======
      Authorization: 'Bearer xxxxxx'
>>>>>>> 4814f98ea5e19a5dcf7505c90bea67a95ce0c157
      }
});

export default instance;
