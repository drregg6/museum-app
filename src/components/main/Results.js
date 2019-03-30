import React, { Component } from 'react';
import Result from './Result';
import PropTypes from 'prop-types';

// redux
// import { connect } from 'react-redux';
// import { fetchImages } from '../actions/imageActons';

class Results extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const count = this.props.count;
        let results = this.props.getResults(this.props.activePage, this.props.results);
        results = (count === null) ? (<h3>Please enter an artist...</h3>) : (count === 0) ? (<h3>Artist not found.</h3>) : (
                results.map(result => (
                <Result
                    key={result.objectNumber}
                    result={result}
                />
            ))
        )

        return (
            <div className="results">
                {results}
            </div>
        )
    }
}
export default Results;