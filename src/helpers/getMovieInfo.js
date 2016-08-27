function getMovieDetails () {
  var apiKey = 'fcc3e3e91b7cc38185ef902ca797ee11';
  // GET request
  this.$http({
    url: 'https://api.themoviedb.org/3/movie/' + this.movie + '?api_key=' + apiKey + '&language=es',
    method: 'GET'
  })
    .then(function (response) {
    // success callback
      this.$set('movieData', response.data);
    // console.log(response.data);
    }, function (response) {
    // error callback
      console.warn(response);
    });
}

export default getMovieDetails;
