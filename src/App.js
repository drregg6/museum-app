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
      this.setState({
        details: {
          title: res.data.artObject.title,
          artist: res.data.artObject.principalOrFirstMaker,
          url: res.data.artObject.webImage.url,
          objectNumber: res.data.artObject.objectNumber,
          date: res.data.artObject.dating.sortingDate,
          description: res.data.artObject.plaqueDescription,
          medium: res.data.artObject.materials.join(', ')
        }
      });
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    const typeKeyFormat = 'collection?key=Ttl8t7tn&format=json'
    let searchEndpoint = `https://www.rijksmuseum.nl/api/en/${typeKeyFormat}`;

    // axios.get(detailsEndpoint)
    // .then(res => {
    //   this.setState({
    //     details: {
    //       title: res.data.artObject.title,
    //       artist: res.data.artObject.principalOrFirstMaker,
    //       url: res.data.artObject.webImage.url,
    //       objectNumber: res.data.artObject.objectNumber,
    //       date: res.data.artObject.dating.sortingDate,
    //       description: res.data.artObject.plaqueDescription,
    //       medium: res.data.artObject.materials.join(', ')
    //     }
    //   })
    // })
    // .catch(err => console.log(err));

    axios.get(searchEndpoint, {
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
            <Search />
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


/*

search page
--> response data of 10 paintings
--> title, image, artist
details page
--> click one of the responses
--> show details (/collections/[image-id])
--> title, image, artist, medium, date, description

*/