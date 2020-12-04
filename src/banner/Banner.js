import React, { useEffect, useState } from "react";
import Axios from "../api/axios";
import Requests from "../api/Request";
import "./Banner.css";
import axios from "axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState({});
  let cancelToken = axios.CancelToken;
  let source = cancelToken.source();
  useEffect(() => {
    (async () => {
      try {
        const request = await Axios.get(Requests.fetchNetflixOriginals, {
          cancelToken: source.token,
        });
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancceled", error.message);
        } else {
          console.log(error);
        }
      }
    })();

    return () => {
      console.log("component unmounted");
      source.cancel("Operation cancelled by the user");
    };
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`, //optional chaining: no need to check if movie is undefined '?' saw this neat trick on stackoverflow
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {/* i notice that some movies give u a title a name or an orginal name , api information isnt consistent   */}
          {movie?.name || movie?.title || movie?.orginal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <p className="banner__description">{movie?.overview}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
