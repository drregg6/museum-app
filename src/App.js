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

- DETAILS PAGE returns to initial state on refresh

- ONLOAD should not have any information
    maybe have SEARCH be the only available option
    large and in charge

- RESULTS display more than 10 results

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
        imgonly: true,
        q: value
      }
    })
    .then(res => {
      this.setState({
        results: res.data.artObjects
      })
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    const endpoint = `https://www.rijksmuseum.nl/api/en/collection?key=Ttl8t7tn&format=json`;

    axios.get(endpoint, {
      params: {
        type: 'painting',
        imgonly: true
      }
    })
    .then(res => {
      this.setState({
        results: res.data.artObjects
      })
    })
    .catch(err => console.log(err));
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