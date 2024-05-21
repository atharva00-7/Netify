import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Trending from "./Components/Trending"
import Popular from "./Components/Popular"
import Movies from "./Components/Movies"
import Tv from "./Components/Tv"
import People from "./Components/People"
import MovieDetails from "./Components/Partials/MovieDetails"
import TvDetails from "./Components/Partials/TvDetails"
import PeopleDetails from "./Components/Partials/PeopleDetails"
import Trailer from "./Components/Partials/Trailer"

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1a1d29] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<PeopleDetails />} />
      </Routes>
    </div>
  )
}

export default App
