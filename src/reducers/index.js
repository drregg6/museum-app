import { combineReducers } from 'redux';
import imageReducer from './imageReducer';


// initial overall state
export default combineReducers({
    images: imageReducer
});