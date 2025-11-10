const movies = [
  { id: 1, title: "Venom 2" },
  { id: 2, title: "Spiderman" },
  { id: 3, title: "Iron Man" },
  { id: 4, title: "Doctor Strange" },
];

const Movie = () => {
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.id}:{movie.title}</li>
      ))}
    </div>
  );
};

export default Movie;
