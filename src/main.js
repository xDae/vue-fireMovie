import Vue from 'vue';
import vueResource from 'vue-resource';
import moment from 'moment';
import Firebase from 'firebase';

import App from './App.vue';

Vue.use(vueResource);

new Vue({
  el: 'body',
  components: { App }
});

Vue.filter('year', function (value) {
    return moment(value).format('YYYY');
});

const dbRef = new Firebase('https://vue-firemoviex.firebaseIO.com');

export default dbRef;
