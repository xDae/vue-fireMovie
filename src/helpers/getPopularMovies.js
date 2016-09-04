function getPopularMovies () {
  var apiKey = 'fcc3e3e91b7cc38185ef902ca797ee11';

  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(response => response.json())
    .then(({results}) => {
      return results;
    })
    .catch(err => console.log('parsing failed', err));
}

export default getPopularMovies;
