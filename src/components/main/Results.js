import React, { Component } from 'react';
import Result from './Result';
import PropTypes from 'prop-types';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let results;
        if (this.props.results.length === 0) {
            results = 'No pieces found';
        } else {
            results = this.props.results.map(result => (
                <Result
                    imgClick={this.props.imgClick}
                    key={result.objectNumber}
                    result={result}
                />
            ));
        }
        return (
            <div className="results">
                {results}
            </div>
        )
    }
}

Results.propTypes = {
    results: PropTypes.array.isRequired
}

export default Results;
// this.props.results.map( (result) => ( <Result key={result.id} result={result} /> ));