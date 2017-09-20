// Code SearchableMovieReviewsContainer Here
import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews.js'
const MYT_API_KEY = '44f8fbc8829b4fe985c23eac0bbc88a7';
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const theBaseURL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends React.Component {
    constructor () {
      super()

      this.state = {
        reviews: [],
        searchTerm: ''
      }
    }

    componentWillMount() {
      fetch(theBaseURL + this.state.searchTerm)
        .then(response => response.json())
        .then(rsp => this.setState({ reviews: rsp.results }));
    }

    searchMe = () => {

    }

    handleThis = (event) => {
      this.setState({searchTerm: event.target.value})
    }

    handleIt = (event) => {
      event.preventDefault()
      console.log(theBaseURL + this.state.searchTerm)
      fetch(theBaseURL + this.state.searchTerm)
        .then(response => response.json())
        .then(rsp => this.setState({ reviews: rsp.results }));
    }

  render() {
    return ( <div className="searchable-movie-reviews">
      <form onSubmit={this.handleIt}>
        <input type="text" onChange={this.handleThis}/>
        <button type="submit">Submit</button>
      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>
  )
  }
}

export default SearchableMovieReviewsContainer
