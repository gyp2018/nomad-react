import axios from 'axios'

export default {

  getMoviesAPI() {
    return axios.get('https://yts.am/api/v2/list_movies.json', {
      params: {
        sort_by: 'download_count'
      }
    }).then(response => response.data.data.movies);
  },

  getList() {
    return false;
  }
}
