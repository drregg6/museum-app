import React from 'react';
import Result from './Result';
import PropTypes from 'prop-types';

export default function Results(props) {
    const count = props.count;
    let results = props.getResults(props.activePage, props.results);

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