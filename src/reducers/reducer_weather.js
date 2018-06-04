
import { FETCH_WEATHER } from "../actions/index";
export default function(state=[], action) {
    // redux promise middleware takes care of the 
    // promise to get resolved before creating action and sending it forward..
    switch(action.type) {
        case FETCH_WEATHER:
        // return a new state instead of old state, best practice
        // in redux is to return new state then a mutated state.
            return state.concat([ action.payload.data ]);
            // return [action.payload.data, ...state];
    }
    return state;
}