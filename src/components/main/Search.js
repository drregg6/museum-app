import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            maker: false,
            century: false
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

    centuryChecked = ev => {
        this.state.century = !this.state.century;
    }
    makerChecked = ev => {
        this.state.maker = !this.state.maker;
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

                <formgroup>
                <input
                    type="checkbox"
                    name="search-type"
                    id="maker"
                    value="maker"
                    onChange={this.makerChecked}
                />
                <label for="maker">Artist</label>
                <input
                    type="checkbox"
                    name="search-type"
                    id="century"
                    value="century"
                    onChange={this.centuryChecked}
                />
                <label for="century">Century</label>
                </formgroup>

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