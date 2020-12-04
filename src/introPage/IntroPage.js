import React from "react";
import Banner from "../banner/Banner";
import Row from "../row/Row";
import Requests from "../api/Request";

function IntroPage() {
  return (
    <div>
      <Banner />
      <Row
        isLargeRow
        title="Netflix Originals"
        fetchUrl={Requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default IntroPage;
