import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            searches: []
        }
    }

    searchList = search => {
        let searches = [];
        if (this.state.searches.length > 4) {
            searches = [...this.state.searches];
            searches.pop();
            searches.unshift(search);
        } else {
            searches = [...this.state.searches];
            searches.unshift(search);
        }
        this.setState({
            searches: searches
        });
    }

    onSubmit = ev => {
        ev.preventDefault();

        this.props.history.push('/');
        this.props.search(this.state.value);
        this.searchList(this.state.value);

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
            <div>
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
                <p>
                {
                    this.state.searches.map(search => {
                        let searchWords = search.split(' ');
                        searchWords = searchWords.map(searchWord => {
                            return searchWord.charAt(0).toUpperCase() + searchWord.slice(1);
                        });
                        searchWords = searchWords.join(' ');
                        return (
                            <span>| {searchWords} |</span>
                        )
                    })
                }
                </p>
            </div>
        )
    }
}

Search.propTypes = {
    search: PropTypes.func.isRequired
}

export default withRouter(Search);