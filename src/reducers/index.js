import { combineReducers } from "redux";
import starWarsReducer from './SW-reducer';

export default combineReducers({
  starWars: starWarsReducer
})