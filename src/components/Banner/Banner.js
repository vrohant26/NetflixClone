import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original";
function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,

        backgroundSize: "cover",
      }}
    >
      <div className="content">
        <h2>{movie.title}</h2>

        <p>{truncate(movie.overview, 150)}</p>
        <div className="buttons">
          <button>Play</button>
          <button
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              color: " white",
            }}
          >
            More info
          </button>
        </div>
      </div>
      <div className="darkshade" />
    </div>
  );
}

export default Banner;
