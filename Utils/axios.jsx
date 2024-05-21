import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmFjZjJiZDkxZTg0MDQ2YzY1YzhkMzg3Nzg4ZjAyMyIsInN1YiI6IjY1ZGIzODlkODI2MWVlMDE4NWMyY2EzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eng2Vap2ZE90O2VXlqNsblY9ObwqVHBM1KOquqCsTkg'
      }
});

export default instance;