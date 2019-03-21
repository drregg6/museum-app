import React, { Component } from 'react';
import Result from './Result';
import PropTypes from 'prop-types';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let count = this.props.count;
        let results = this.props.getResults(this.props.activePage, this.props.results);

        results = results.map(result => (
            <Result
                imgClick={this.props.imgClick}
                key={result.objectNumber}
                result={result}
            />
        ))

        return (
            <div className="results">
                {(count === null) && <h3>Please enter an artist!</h3>}
                {(count === 0) && <h3>Artist not found...</h3>}
                {results}
            </div>
        )
    }
}

Results.propTypes = {
    results: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    getResults: PropTypes.func.isRequired,
    imgClick: PropTypes.func.isRequired
}

export default Results;