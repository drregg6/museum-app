// what the action will do to the store
import { GET_IMAGES } from '../actions/types';

const initialStore = {
    images: []
}

const imageReducer = (store = initialStore, action) => {
    switch(action.type) {
        case GET_IMAGES:
            return store;
        default:
            return store;
    }
}

export default imageReducer;