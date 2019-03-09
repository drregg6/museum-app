import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { url, title, artist, medium, date, description } = this.props.details;

        return (
            <div className="details">
                <h1>{title}</h1>
                <img
                    style={imageStyles}
                    src={url}
                    alt={title}
                />
                <h2>{artist}</h2>
                <p>Medium: {medium}</p>
                <p>From: {date}</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

const imageStyles = {
    width: 350,
    height: 'auto'
}

Details.propTypes = {
    details: PropTypes.object.isRequired
}

export default Details;