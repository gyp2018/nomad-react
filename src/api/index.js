import axios from 'axios'

export default {

  getMoviesAPI() {
    return axios.get('https://yts.am/api/v2/list_movies.json?quality=1080p')
                .then(response => response.data.data.movies);
  },

  getList() {
    return false;
  }
}
