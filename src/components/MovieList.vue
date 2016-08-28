<template>
  <section  class="movies">
    <div v-if="$loadingRouteData">Loading...</div>

    <movie-card v-for="movie of movies" track-by="tmdbID" :id="movie.tmdbID" :title="movie.title"></movie-card>
  </section>
</template>

<script>
import getMovies from '../firebaseAPI/getMovies';
import MovieCard from './MovieCard';

export default {
  name: 'MovieList',
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
    MovieCard
  },
  methods: {
    getMovies
  }
};
</script>

<style></style>
