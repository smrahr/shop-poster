import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Detail.css";

const Detail = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [showDetail, setShowDetail] = useState(false);
  const locationState = "/posters";

  if (showDetail) {
    return <Navigate to={locationState} replace />;
  }

  return (
    <div className="detail">
      <div className="detail-poster-img-wrapper">
        <img src={`/images${state.src}`} alt={state.title} />
      </div>
      <div className="detail-poster-info">
        <h3>{state.title}</h3>
        <p>price: {state.price} $</p>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de texte, comme Aldus
          PageMaker.
        </p>
        <button onClick={() => dispatch({ type: "ADD", payload: state })}>
          ADD TO BASKET
        </button>
        <button onClick={() => setShowDetail(true)}>Back</button>
      </div>
    </div>
  );
};

export default Detail;
