import React, { useState } from "react";
import "./results.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { API_KEY } from "../api/Request";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#111",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "white",
    maxWidth: "300px",
    maxHeight: "500px",
  },
  video: {
    width: "560",
    height: "315",
    backgroundColor: "#111",
    boxShadow: theme.shadows[5],
  },
}));

const base_url = "https://image.tmdb.org/t/p/original/";
function Results({ data }) {
  const [selectedMovie, setSelectedMovie] = useState({});
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [videoArr, setVideoArr] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [openFrame, setOpenFrame] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenFrame(false);
  };

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    handleOpen();
  };

  const handleTrailer = async () => {
    const url = `https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key=${API_KEY}&append_to_response=videos`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setVideoArr(data.videos.results);
      //console.log(videoArr)
      videoArr.map((video) =>
        video.type === "Trailer" ? setTrailer(video) : setTrailer({})
      );
      setOpenFrame(true);
      console.log(trailer);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(selectedMovie);
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
          {openFrame ? (
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
          ) : (
            <div className={classes.paper}>
              <img
                src={`${base_url}${selectedMovie.poster_path}`}
                className="poster posterLarge"
              />
              <div className="name-date">
                <h3 id="transition-modal-title">{selectedMovie.title}</h3>
                <h5>{selectedMovie.release_date}</h5>
              </div>

              <hr />
              <p id="transition-modal-description" className="overview">
                {selectedMovie.overview}
              </p>
              <div className="rating-utube">
                <p className="rating">Ratings: {selectedMovie.vote_average}</p>
                <p onClick={handleTrailer}>
                  <YouTubeIcon />
                </p>
              </div>
            </div>
          )}
        </Fade>
      </Modal>

      <div className="posters">
        {data.map((movie) => (
          <div className="movie">
            <img
              key={movie.id}
              className="poster posterLarge"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Results;
