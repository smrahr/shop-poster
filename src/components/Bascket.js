import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import "./Bascket.css"

const Bascket = () => {
    const selectedPosters = useSelector(state => state.poster.chosenPosters);
    const dispatch = useDispatch()
    console.log(selectedPosters, 'selectedPosters')

    return (<div className="bascket-wrapper">
        {selectedPosters.map(item => <div className="bascket">
            {item.title}
            {/* <div className="basket-poster-img-wrapper">
                <img src={`/images${item.src}`} alt={item.title}/>
            </div>
            <div className="bascket-poster-info">
            <h3>{item.title}</h3>
            <p>price: {item.price} $</p>
            <button onClick={() => dispatch({type:'DELETE', payload: item})}>REMOVE FROM BASKET</button>
            </div> */}
        </div>)}
        
    </div>)
}

export default Bascket;