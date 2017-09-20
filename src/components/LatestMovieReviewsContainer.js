import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews.js'

//f98593a095b44546bf4073744b540da0
const MYT_API_KEY = '44f8fbc8829b4fe985c23eac0bbc88a7';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(rsp => this.setState({ reviews: rsp.results }));
  }

  render () {
    console.log(2, this.state.reviews)
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>

    )
  }
}

export default LatestMovieReviewsContainer
