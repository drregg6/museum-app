import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Result = (props) => {
    const artistName = artist => {
        if (artist === 'anonymous') {
            return 'Anonymous';
        } else if (artist.length > 25) {
            let arr = artist.split(' ');
            return arr.slice(1).join(' ');
        } else {
            return artist;
        }
    }

    const {title, objectNumber} = props.result;
    const artist = artistName(props.result.principalOrFirstMaker);
    const url = props.result.webImage.url;

    return (
        <div className="result">
            <Link to={`details/${objectNumber}`}>
                <img
                    src={url}
                    alt={title}
                />
            </Link>
            <h2>{artist}</h2>
        </div>
    )
}

export default Result;