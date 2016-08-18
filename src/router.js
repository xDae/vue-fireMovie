import Vue from 'vue';
import VueRouter from 'vue-router';

import MovieList from './components/MovieList';

Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  history: true,
  transitionOnLoad: true,
});

router.map({
  '/': {
    name: 'Home',
    component: MovieList,
  },
  '/movie/:id': {
    name: 'movie',
    component: {
      template: '<p>the film ID is {{$route.params.id}}</p>',
    },
  },
});

export default router;
