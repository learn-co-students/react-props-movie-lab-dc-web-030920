import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // title: 'Choux and Maru go to Istanbul',
  //   IMDBRating: 3,
  //   genres: ['cats', 'adventure', 'romance'],
  //   poster: 'choux-maru-istanbul'

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map( obj => <MovieCard 
      title = {obj.title} 
      IMDBRating = {obj.IMDBRating} 
      genres = {obj.genres} 
      poster = {obj.poster}/>)
  }

  render() {
    console.log('here')
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
