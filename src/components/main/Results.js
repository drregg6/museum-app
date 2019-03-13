import React, { Component } from 'react';
import Result from './Result';
import PropTypes from 'prop-types';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let results = this.props.getResults(this.props.activePage, this.props.results);
        if (results.length === 0) {
            results = 'No pieces found';
        } else {
            results = results.map(result => (
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