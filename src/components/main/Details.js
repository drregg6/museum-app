import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    componentDidMount() {
        let key = this.props.match.params.image_id.toUpperCase();
        axios.get(`https://www.rijksmuseum.nl/api/en/collection/${key}?key=Ttl8t7tn&format=json`)
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
        .catch(err => {
            console.log(err);
        });
    }

    addDescription = description => {
        let descriptions = [
            'A beautiful piece of art!',
            'Gorgeous! Simply gorgeous!',
            'Breathtaking colors and such fine detail',
            'The expressions, the enthusiasm, the beauty!',
            'The artist really knew what they were doing with this piece',
            'A stunning display of artistry!',
            'A hidden gem...',
            'The techniques, value, color, and artistry are top-notch in this piece'
        ]

        let randNum = Math.floor(Math.random() * descriptions.length);

        if (description === null) {
            return descriptions[randNum];
        } else {
            return description;
        }
    }

    render() {
        const { url, title, artist, medium, date } = this.state.details;
        const description = this.addDescription(this.state.details.description);
        const renderDetails = this.state.details ? (
                <div className="details">
                    <a href={url} target="_blank">
                        <img
                            src={url}
                            alt={title}
                        />
                    </a>
                    <h1>{title}</h1>
                    <h2>{artist}</h2>
                    <div className="description">
                        <p className="strong">{date}</p>
                        <p>{description}</p>
                        <p className="italics">{medium}</p>
                    </div>
                    <Link to="/">Home</Link>
                </div>
            ) : (
                <div className="details">
                    <h1>Please be patient while your image is searched</h1>
                </div>
            );

        return (
            <React.Fragment>
                {renderDetails}
            </React.Fragment>
        )
    }
}

export default Details;