import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
    render() {
        return(
            <li>{this.props.result.title}</li>
        )
    }
}

Result.propTypes = {
    result: PropTypes.object.isRequired
}

export default Result;