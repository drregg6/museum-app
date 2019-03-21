/*

BUGS
----

- when ARTIST is clicked on Details page
    search(artist)

- re-structure code :)

--- on GitHub under construction ---
- ADD checkboxes to search for
    maker
    century
--- on GitHub under construction ---

*/

import React, { Component } from 'react';
import Results from './components/main/Results';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Details from './components/main/Details';
import Search from './components/main/Search';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Pagination from 'react-js-pagination';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: null,
      results: [],
      details: {
        title: '',
        artist: '',
        url: '',
        objectNumber: '',
        date: 0,
        medium: '',
        description: ''
      },
      activePage: 1
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  handlePageChange(pageNum) {
    console.log(`active page is ${pageNum}`);
    this.setState({
      activePage: pageNum
    });
  }

  getResults = (page, results) => {
    return results.filter((result, i) => {
      return i >= (12 * (page - 1)) && i < (page * 12);
    })
  }

  imgClick = key => {
    const endpoint = `https://www.rijksmuseum.nl/api/en/collection/${key}?key=Ttl8t7tn&format=json`;

    axios.get(endpoint)
    .then(res => {
      let descriptionVal = '';
      if (res.data.artObject.plaqueDescription) {
        descriptionVal = res.data.artObject.plaqueDescription;
      } else {
        descriptionVal = res.data.artObject.plaqueDescriptionEnglish;
      }

      this.setState({
        details: {
          title: res.data.artObject.title,
          artist: res.data.artObject.principalOrFirstMaker,
          url: res.data.artObject.webImage.url,
          objectNumber: res.data.artObject.objectNumber,
          date: res.data.artObject.dating.sortingDate,
          description: descriptionVal,
          medium: res.data.artObject.materials.join(', ')
        }
      });
    })
    .catch(err => console.log(err));
  }

  search = (value = 'Rembrandt') => {
    const endpoint = 'https://www.rijksmuseum.nl/api/en/collection?key=Ttl8t7tn&format=json';

    axios.get(endpoint, {
      params: {
        q: value,
        type: 'painting',
        imgonly: true,
        ps: 50
      }
    })
    .then(res => {
      this.setState({
        count: res.data.count,
        results: res.data.artObjects,
        activePage: 1
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="app-container">
            <Search
              search={this.search}
            />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Results
                    count={this.state.count}
                    results={this.state.results}
                    imgClick={this.imgClick}
                    getResults={this.getResults}
                    activePage={this.state.activePage}
                  />
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={12}
                    totalItemsCount={this.state.results.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                  />
                  </React.Fragment>
              )}
            />
            <Route
              path='/details'
              render={props => (
                <React.Fragment>
                  <Details
                    details={this.state.details}
                  />
                </React.Fragment>
              )}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;