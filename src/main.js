import Vue from 'vue';
import vueResource from 'vue-resource';
import Firebase from 'firebase';

import App from './App.vue';

Vue.use(vueResource);

new Vue({
  el: 'body',
  components: { App }
});


const dbRef = new Firebase('https://vue-firemoviex.firebaseIO.com');

export default dbRef;
