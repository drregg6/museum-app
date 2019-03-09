import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Enter an artist..."
                    name="search"
                />
                <input
                    type="Submit"
                    value="Search"
                />
            </form>
        )
    }
}

export default Search;