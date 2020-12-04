import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./nav/Nav";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import IntroPage from "./introPage/IntroPage";
import Results from "./results/Results";
import { API_KEY } from "./api/Request";
import HomePage from "./homePage/HomePage";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { auth } from "./firebase/firebase";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [dataArr, setDataArr] = useState([]);
  const history = useHistory("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    });
  }, []);

  if (user === undefined) {
    history.push("/");
  }

  const handleChange = (e) => {
    setInputVal(e.target.value.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputVal}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      history.push("/results");
      setDataArr(data.results);
    } catch (err) {
      console.error(err);
    }
    setInputVal("");
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/results" exact>
          {user ? (
            <>
              <Nav
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                inputVal={inputVal}
                user={user}
              />
              <Results data={dataArr} />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/netflix" exact>
          {user ? (
            <>
              <Nav
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                inputVal={inputVal}
                user={user}
              />
              <IntroPage />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/" exact>
          {!user ? <HomePage /> : <Redirect to="/netflix" />}
        </Route>
        <Route path="/login" exact>
          {!user ? <Login /> : <Redirect to="/netflix" />}
        </Route>
        <Route path="/signup" exact>
          {!user ? <Signup /> : <Redirect to="/netflix" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
