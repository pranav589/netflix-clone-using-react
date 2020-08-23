import React from "react";
import "./style.css";
import Row from './Row'
import Request from './Request'
import Banner from './Banner'

export default function App() {
  return (
    <div className="App">
      {/*Navbar */}

      {/*Banner */}
      <Banner/>

      <Row title="NETFLIX ORIGINALS" fetchUrl={Request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries}/>
    </div>
  );
}
export default App