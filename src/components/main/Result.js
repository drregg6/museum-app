import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    artistName = artist => {
        if (artist === 'anonymous') {
            return 'Anonymous';
        } else if (artist.length > 25) {
            let arr = artist.split(' ');
            return arr.slice(1).join(' ');
        } else {
            return artist;
        }
    }

    render() {
        const {title, objectNumber} = this.props.result;
        const artist = this.artistName(this.props.result.principalOrFirstMaker);
        const url = this.props.result.webImage.url;
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
}

Result.propTypes = {
    result: PropTypes.object.isRequired
}

export default Result;