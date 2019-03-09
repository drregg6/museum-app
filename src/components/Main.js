import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { url, title, artist } = this.props;

        return (
            <div className="main">
                <h1>{title}</h1>
                <img
                    style={imageStyles}
                    src={url}
                    alt={title}
                />
                <h2>{artist}</h2>
            </div>
        )
    }
}

const imageStyles = {
    width: 350,
    height: 'auto'
}

Main.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
}

export default Main;