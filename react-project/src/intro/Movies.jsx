import { useState } from "react";

const Movies = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <div>Movie Title: {title}</div>
      <button className="btn" onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked  ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Movies;
