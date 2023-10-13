import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import PostersList from "./PostersList";
import Poster from "./Poster";
import "./Posters.css";

const Posters = () => {
  return (
    <div className="posters">
      {PostersList.map((poster, index) => (
        <Poster posterDetail={poster} key={index} />
      ))}
    </div>
  );
};

export default Posters;
