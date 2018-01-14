import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import API from './api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const movies = await API.getMoviesAPI();
    this.setState({
      movies
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {
            this.state.movies
            ? <MovieList movies={this.state.movies} />
            : <h5>Loading...</h5>
          }
        </div>
      </div>
    );
  }
}

export default App;
