import React,{useState,useEffect} from 'react'
import axios from './axios'
import './row.css'

const base_url="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}){
  const [movies,setMovies]=useState([])

  useEffect(()=>{
      //here the function that runs when Row.js loads
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
  return(
    <div className="row">
    {/*titles */}
      <h2>{title}</h2>
      
      {/*container for posters */}
      <div className="row_posters">
        {movies.map(movie=>(
          <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}  className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id}/>
        ))}
      </div>
    </div>
  )
}

export default Row