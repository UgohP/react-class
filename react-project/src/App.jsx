import { useEffect, useState } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovie = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      console.log(data);

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch Movies");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      setErrorMessage("Error Fetching Movies, Please try again later");
      setMovieList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="pattern">
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Image" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll enjoy with
            Without Stress
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <p className="text-white">{searchTerm}</p>
        </header>
        <section className="all-movies">
          <h2 className="mt-10">All Movies</h2>
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : errorMessage ? (
            <p className="text-white">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <li>
                  <p className="text-white">{movie.title}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
