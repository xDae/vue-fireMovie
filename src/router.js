import Vue from 'vue';
import VueRouter from 'vue-router';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  history: true,
  transitionOnLoad: true
});

router.map({
  '/': {
    name: 'Home',
    component: MovieList
  },
  '/movie/:id/:name/': {
    name: 'movie',
    component: MovieDetails
  }
});

export default router;
