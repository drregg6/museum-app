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

    renderResults = (artist) => {
        this.props.history.push('/');
        this.props.getArtist(artist);
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

        if (this.state.value === '') {
            alert("Please enter an artist");
            return;
        } else {
            this.renderResults(this.state.value);
            this.searchList(this.state.value);

            this.setState({
                value: ''
            });
        }
    }

    onChange = ev => {
        this.setState({
            value: ev.target.value
        })
    }

    capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }



    render() {
        const searchHistory = this.state.searches.map((search, i) => {
            let searchWords = search.split(' ');
            searchWords = searchWords.map(searchWord => this.capitalize(searchWord));
            searchWords = searchWords.join(' ');
            return (
                <span key={i}>| <span className="search-history" onClick={() => {this.renderResults(searchWords)}}>{searchWords}</span> |</span>
            )
        })

        return (
            <div className="search">
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
                    {searchHistory}
                </p>
            </div>
        )
    }
}

Search.propTypes = {
    getArtist: PropTypes.func.isRequired
}

export default withRouter(Search);