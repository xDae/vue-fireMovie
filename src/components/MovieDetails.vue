<template>

    <img class="cover" :src="background" alt="" class="cover" />

        {{name}}
</template>

<script>
// import 'whatwg-fetch';

export default {
  name: 'MovieDetails',
  route: {
    data: function (transition) {
      return fetch(`https://webservice.fanart.tv/v3/movies/${transition.to.params.id}?api_key=eb3b624d1526d41441b1cd8b608415d0`)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          return {
            name: json.name,
            background: json.hdmovieclearart[0].url
          };
        })
        .catch(function (ex) {
          console.log('parsing failed', ex);
        });
    }
  },
  ready () {
  },
  data () {
    return {
      name: '',
      background: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
