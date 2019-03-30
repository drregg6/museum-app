// what the action will do to the store
import { GET_IMAGES } from '../actions/types';


// state within imageReducer
const initialStore = {
    images: [],
    count: null,
    activePage: 1
}

const imageReducer = (store = initialStore, action) => {
    switch(action.type) {
        case GET_IMAGES:
            let count = action.images.count;
            return {
                ... store,
                count: count,
                images: action.images
            }
        default:
            return store;
    }
}

export default imageReducer;