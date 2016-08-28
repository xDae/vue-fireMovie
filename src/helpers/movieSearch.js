function movieSearch (query, lang = 'en') {
  let apiKey = 'fcc3e3e91b7cc38185ef902ca797ee11';

  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=${lang}&include_adult=false`)
    .then(response => response.json())
    .then(({results}) => {
      return results.filter(function (film) {
        return film.vote_count > 0;
      });
    })
    .catch(err => console.log('parsing failed', err));
}

export default movieSearch;
