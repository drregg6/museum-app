import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);
    }

    addDescription = description => {
        let descriptions = [
            'A beautiful piece of art!',
            'Gorgeous! Simply gorgeous!',
            'Breathtaking colors and such fine detail',
            'The expressions, the enthusiasm, the beauty!',
            'The artist really knew what they were doing with this piece',
            'A stunning display of artistry!',
            'A hidden gem...',
            'The techniques, value, color, and artistry are top-notch in this piece'
        ]

        let randNum = Math.floor(Math.random() * descriptions.length);

        if (description === null) {
            return descriptions[randNum];
        } else {
            return description;
        }
    }

    render() {
        const { url, title, artist, medium, date } = this.props.details;
        const description = this.addDescription(this.props.details.description);

        return (
            <div className="details">
                <a href={url} target="_blank">
                    <img
                        src={url}
                        alt={title}
                    />
                </a>
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