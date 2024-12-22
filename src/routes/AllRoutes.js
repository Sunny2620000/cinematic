import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages/index";

const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<MovieList title="movie/now_playing" />} />
        <Route
          path="movie/popular"
          element={<MovieList title="movie/popular" />}
        />
        <Route
          path="movie/toprated"
          element={<MovieList title="movie/top_rated" />}
        />
        <Route
          path="movie/upcoming"
          element={<MovieList title="movie/upcoming" />}
        />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="search/movie" element={<Search title="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
