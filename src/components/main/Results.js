import React, { Component } from 'react';
import Result from './Result';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const results = this.props.results.map(result => (
            <Result result={result} />
        ));
        return (
            <div className="results">
                <ul>
                    {results}
                </ul>
            </div>
        )
    }
}

Results.propTypes = {
    results: PropTypes.array.isRequired
}

export default Results;
// this.props.results.map( (result) => ( <Result key={result.id} result={result} /> ));