import React, { Component } from 'react';
import Main from './components/Main';
import axios from 'axios';

import './App.css';

/*

API PARAMETER
-------------
p= the result page (0-n)
ps= the number of results per page (0-100)
maker= artist (a-z)
type= type of artwork (a-z)
material= material of artwork (a-z)
f.dating.period= the century which work is made (0-21)
imgonly= only give results for which an image is available (bool)
toppieces= only give works that are top pieces (bool)

EXAMPLE
-------
https://www.rijksmuseum.nl/api/en/collection?key=Ttl8t7tn&format=json&type=painting&p=10&imgonly=true

RESPONSE
--------
res => {
  res.data.artObjects: [ an arr containing the pieces, p=10 will only contain 10 pieces
    {
      links: {
        ...
      },
      id: "asdf"
      title: "poafssd"
      objectNumber: "asdjnas"
      hasImage: bool
      principalOrFirstMaker: "aldkfnas"
      longTitle: "aldfkna"
      webImage: {
        url: "alsdfnasdl"
        width: 1248
        height: 2384
      }
    },
    {
      links: {
        ...
      },
      id: "sadjfn"
      title: "aldfn"
      objectNumber: "asdlkfjna"
      hasImage: bool
      principalOrFirstMaker: "aldfn"
      longTitle: "aldkfn"
      webImage: {
        url: "ajdfna"
        width: 1223i8
        height: 45239
      }
    },
    ...
  ]
}

*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      title: '',
      url: '',
      artist: '',
      type: ''
    }
  }

  componentWillMount() {
    const typeKeyFormat = 'collection?key=Ttl8t7tn&format=json'
    const key = '?key=Ttl8t7tn&format=json';
    let type = 'collection';
    let endpoint = `https://www.rijksmuseum.nl/api/en/${type}/SK-C-5${key}`;
    axios.get(endpoint)
    .then(res => {
      this.setState({
        data: res.data,
        title: res.data.artObject.title,
        artist: res.data.artObject.principalMakers[0].name,
        url: res.data.artObject.webImage.url,
        type: res.data.artObject.objectTypes[0]
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Main
            url={this.state.url}
            title={this.state.title}
            artist={this.state.artist}
          />
        </div>
      </div>
    );
  }
}

export default App;
