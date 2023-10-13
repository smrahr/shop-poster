import React, { useState } from "react";
import "./Poster.css";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Poster = ({ posterDetail }) => {
  const [showDetail, setShowDetail] = useState(false);
  const dispatch = useDispatch();
  const locationState = `/detail/:${posterDetail.id}`;

  if (showDetail) {
    return <Navigate to={locationState} replace state={posterDetail} />;
  }

  // onClick={() => dispatch({type:'ADD', payload: posterDetail})}
  return (
    <div className="poster-wrapper" onClick={() => setShowDetail(true)}>
      <div className="poster-img-wrapper">
        <img src={`/images${posterDetail.src}`} alt={posterDetail.title} />
      </div>
      <div className="poster-info">
        <h3>{posterDetail.title}</h3>
        <p>price: {posterDetail.price} $</p>
        <button>More Detail</button>
      </div>
    </div>
  );
};

export default Poster;
