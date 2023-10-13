import { combineReducers } from "redux"

import { ADD } from "./actions"

const initialValue = {
    chosenPosters : [] 
}

export const posterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD:
            state = {
                ...state,
                chosenPosters : [...state.chosenPosters, action.payload]
            }
    
        default: 
        return state
    }
}

export const rootReducer = combineReducers({
    poster: posterReducer,
})