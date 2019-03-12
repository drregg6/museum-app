import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onSubmit = ev => {
        ev.preventDefault();
        this.props.search(this.state);
        this.setState({
            value: ''
        });
    }

    onChange = ev => {
        this.setState({
            value: ev.target.value
        })
    }



    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input
                    type="text"
                    placeholder="Enter an artist..."
                    name="search"
                    value={this.state.value}
                    onChange={this.onChange}
                />

                <input
                    type="submit"
                    value="Search"
                />
            </form>
        )
    }
}

Search.propTypes = {
    search: PropTypes.func.isRequired
}

export default Search;