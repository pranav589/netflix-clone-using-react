import React,{useState,useEffect} from 'react'
import axios from './axios'
import Request from './Request'
import './Banner.css'

function Banner(){
  const [movie,setMovie]=useState([])

  useEffect(()=>{
    {/*the code here fires when the banner component loads */}
    async function fetchData(){
      const request=await axios.get(Request.fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
      return request
    }
    fetchData()
  },[])


  function truncate(str,n){
    return str && str.length > n ? str.substr(0,n-1) + '...' : str
  }
{/*
  console.log(movie)*/}
  return(
    <header className='banner' style={{backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}")`,
    backgroundPosition:"center cemter"}}>{/*bg img */}
      <div className="banner_contents">
    
       {/*title */}
       <h1 className="banner_title">{movie && movie.title || movie && movie.name || movie && movie.original_name}</h1>
       {/*buttons inside a div*/}
       <div className="banner_buttons">
         <button className="banner_button">Play</button>
         <button className="banner_button">My List</button>
       </div>
       {/*description */}
       <h1 className='banner_desc'>
       {truncate(movie && movie.overview,150)}</h1>
       </div>
       <div className="banner_fadeBottom"/>
    </header>
  )
}

export default Banner