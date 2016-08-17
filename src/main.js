import Vue from 'vue';
import VueResource from 'vue-resource';

import VueFire from 'vuefire';
import { sync } from 'vuex-router-sync';
import store from './store';
import router from './router';

import App from './App';

Vue.use(VueResource);
Vue.use(VueFire);

sync(store, router);

// /* eslint-disable no-new */
// new Vue({
//   store,
//   el: 'body',
//   components: { App },
// });

Vue.extend({
  store,
  components: { App },
});

router.start(App, 'app');
