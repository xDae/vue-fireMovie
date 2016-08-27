<template>
  <app-header></app-header>

  <h2>Most Popular Movies</h2>

  <section  class="movies">
    <div v-if="$loadingRouteData">Loading...</div>

    <movie-card v-for="movie of movies" track-by="tmdbID" :id="movie.tmdbID" :title="movie.title"></movie-card>
  </section>
</template>

<script>
import getMovies from '../firebaseAPI/getMovies';
import MovieCard from './MovieCard';

import Header from './Header';

export default {
  name: 'Home',
  route: {
    data: () => ({
      movies: getMovies()
    })
  },
  data () {
    return {
      movies: []
    };
  },
  components: {
    AppHeader: Header,
    MovieCard
  },
  methods: {
    getMovies
  }
};
</script>

<style></style>
