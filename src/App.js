/*

BUGS
----

- SEARCH FORM doesn't work on Details page
    if search is entered on Details page
      return home
      then search
    else
      search
    end

--- on GitHub under construction ---
- ADD checkboxes to search for
    maker
    century
--- on GitHub under construction ---

- ADD pagination

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


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      details: {
        title: '',
        artist: '',
        url: '',
        objectNumber: '',
        date: 0,
        medium: '',
        description: ''
      }
    }
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
        ps: 12
      }
    })
    .then(res => {
      this.setState({
        results: res.data.artObjects
      })
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    // search();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Search
              search={this.search}
            />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Results
                    results={this.state.results}
                    imgClick={this.imgClick}
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
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;