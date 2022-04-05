import { combineReducers,createStore} from "redux";
import { reducers } from "../features";


const store = createStore(combineReducers(reducers))

export default store;
