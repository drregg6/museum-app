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
                <img
                    src={url}
                    alt={title}
                />
                <h1>{title}</h1>
                <h2>{artist}</h2>
                <div className="description">
                    <p className="strong">{date}</p>
                    <p>{description}</p>
                    <p className="italics">{medium}</p>
                </div>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

Details.propTypes = {
    details: PropTypes.object.isRequired
}

export default Details;