import { combineReducers,createStore } from "redux";
import * as features from "../features";

const getReducers = ()=>{
    const reducers = {}
    for(let feature in features){
        if(features[feature]?.reducer){
            reducers[feature] = features[feature].reducer
        }
    }
    return reducers;
}

const store = createStore(combineReducers(getReducers()))

export default store;
