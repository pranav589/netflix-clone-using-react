import React, { useState, useEffect } from "react";
import Axios from "../api/axios";
import "./row.css";
import ScrollContainer from "react-indiana-drag-scroll";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { API_KEY } from "../api/Request";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "560",
    height: "315",
    backgroundColor: "#111",
    boxShadow: theme.shadows[5],
  },
}));

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const classes = useStyles();
  const [videoArr, setVideoArr] = useState([]);
  const [trailer, setTrailer] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let cancelToken = axios.CancelToken;
  let source = cancelToken.source();

  useEffect(() => {
    (async () => {
      try {
        const request = await Axios.get(fetchUrl, {
          cancelToken: source.token,
        });
        setMovies(request.data.results);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled");
        } else {
          console.log(error);
        }
      }
    })();
    return () => {
      //when the component unmounts
      console.log("component unmounted");

      //cancel the request
      source.cancel("Operation cancelled by user");
    };
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    setSelectedMovie(movie);
    handleOpen();
    const url = `https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key=${API_KEY}&append_to_response=videos`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setVideoArr(data.videos.results);
      console.log(data.videos);
      videoArr.map((video) =>
        video.type === "Trailer" ? setTrailer(video) : setTrailer({})
      );
      console.log(trailer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.video} id="iframe">
            <iframe
              width="560"
              height="315"
              src={`https://youtube.com/embed/${trailer.key}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="iframe"
            ></iframe>
          </div>
        </Fade>
      </Modal>
      <div className="row">
        <h2>{title}</h2>
        <ScrollContainer className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} //use && if theres no else or : otherwise use ?
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </ScrollContainer>
      </div>
    </>
  );
}

export default Row;
