import { GET_IMAGES } from './types';
import axios from 'axios';


// action called in the Component
export const fetchImages = () => (dispatch) => {
    console.log('fetching images...');
    const endpoint = 'https://www.rijksmuseum.nl/api/en/collection?key=Ttl8t7tn&format=json';

    axios.get(endpoint, {
      params: {
        q: 'Rembrandt',
        type: 'painting',
        imgonly: true,
        ps: 50
      }
    })
    .then(res => dispatch({
        type: GET_IMAGES,
        images: res
    }))
    .catch(err => console.log(err));
}