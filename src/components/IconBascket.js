import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";

const IconBascket = () => {
  const selectedPosters = useSelector((state) => state.poster.chosenPosters);

  const [showDetail, setShowDetail] = useState(false);
  const locationState = `/bascket`;

  if (showDetail) {
    return <Navigate to={locationState} replace state={selectedPosters} />;
  }
  console.log(selectedPosters, "selectedPosters");

  return (
    <div>
      <div className="bascket-icon">
        <img src="/images/bascket.png" onClick={() => setShowDetail(true)} />
        <div className="bascket-count">
          {selectedPosters.length ? selectedPosters.length : null}
        </div>
      </div>
    </div>
  );
};

export default IconBascket;
