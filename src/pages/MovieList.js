import { Cards } from "../components/index";
import { useFetch } from "../hooks/main";
const MovieList = (props) => {
  const { movies } = useFetch(props.title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => {
            return <Cards key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};
export default MovieList;
