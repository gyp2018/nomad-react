import React, { Component } from 'react';
import './App.css';
import Movie from './components/Movie';
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
    console.log(movies)
    this.setState({
      movies
    });
  }

  renderList() {
    return this.state.movies.map(movie => {
      return <Movie key={movie.id} title={movie.title} />
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this.renderList() : 'Loading...'}
      </div>
    );
  }
}

export default App;
