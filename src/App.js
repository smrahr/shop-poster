import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Posters from "./components/Posters";
import Detail from "./components/Detail";
import Bascket from "./components/Bascket";
import Test from "./components/IconBascket";

// import { useSelector, useDispatch } from 'react-redux'

function App() {
  const selectedPosters = useSelector((state) => state.poster.chosenPosters);

  const handleClick = (e) => {
    window.location.href = "/bascket";
  };

  return (
    <div>
      <div className="App">
        {/* <div>{selectedPosters.length ? selectedPosters[0].title : null}</div> */}

        <Router>
          <Test />
          {/* <div className="bascket-icon">
            <img src="/images/bascket.png" onClick={() => handleClick()} />
            <div className="bascket-count">
              {selectedPosters.length ? selectedPosters.length : null}
            </div>
          </div> */}
          <Routes>
            <Route exact path="/" Component={Posters} />
            <Route exact path="/detail/:shopId" Component={Detail} />
            <Route exact path="/bascket" Component={Bascket} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
