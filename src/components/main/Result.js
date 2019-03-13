import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.result.title;
        const artist = this.props.result.principalOrFirstMaker;
        const url = this.props.result.webImage.url;
        const objectNumber = this.props.result.objectNumber;
        return (
            <div className="result">
                <Link to="Details">
                    <img
                        src={url}
                        alt={title}
                        onClick={this.props.imgClick.bind(this, objectNumber)}
                    />
                </Link>
            </div>
        )
    }
}

// const imgStyle = {
//     width: 400,
//     height: 'auto'
// }

Result.propTypes = {
    result: PropTypes.object.isRequired,
    imgClick: PropTypes.func.isRequired
}

export default Result;