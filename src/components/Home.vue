<template>
  <app-header></app-header>

  <h2>Most Popular Movies</h2>

  <router-view></router-view>

  <section  class="movies">
    <div v-if="$loadingRouteData">Loading...</div>

    <movie-card v-for="movie of movies" track-by="id" :id="movie.id" :title="movie.title" :poster="movie.poster_path"></movie-card>
  </section>
</template>

<script>
import getPopularMovies from './../helpers/getPopularMovies';

import MovieCard from './MovieCard';
import Header from './Header';

export default {
  name: 'Home',
  route: {
    data: () => ({
      movies: getPopularMovies()
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
    getPopularMovies
  }
};
</script>

<style lang="scss" scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  height: 70vh;
  padding: 8px 18px;
}
</style>
