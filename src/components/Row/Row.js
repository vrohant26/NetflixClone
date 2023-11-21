import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovie(req.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movie.map((movies) => {
          return (
            <img
              className="row_poster"
              key={movies.id}
              src={`${base_url}${movies.backdrop_path}`}
              alt={movies.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
