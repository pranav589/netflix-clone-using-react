import React,{useState,useEffect} from 'react'
import axios from './axios'
import './row.css'
import Youtube from "react-youtube"
import movieTrailer from 'movie-trailer'

const base_url="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}){
  const [movies,setMovies]=useState([])
  const [trailerUrl,setTrailerUrl]=useState('')

  useEffect(()=>{
      //here the function that kruns when Row.js loads
      async function fetchData(){
        const request=await axios.get(fetchUrl)
        console.log(request.data.results)
        setMovies(request.data.results)
        return request
      }
      fetchData()
  },[fetchUrl])
   {/*fetchUrl is included in the useEffect from outside of the current component,hence it has to be included in the dependancy*/}
console.log(movies)

const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

  const handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl('')
    }else{
      movieTrailer(movie && movie.name || "").then(url=>{
        const urlParams=new URLSearchParams(new URL(url).search)
        urlParams.get('v')
      }).catch(err=>console.log(err.message))
    }
  }
 
  return(
    <div className="row">
    {/*titles */}
      <h2>{title}</h2>
      
      {/*container for posters */}
      <div className="row_posters">
        {movies.map(movie=>(
          <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}  className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} onClick={handleClick(movie)}/>
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row