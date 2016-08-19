<template>
  <div class="featured-movie">
    <img class="cover" :src="movieImages.hdmovieclearart[0].url" alt="" class="cover" />
    <p class="corner-title">Staff pick</p>

    <div class="bottom-bar">
      <div class="title-container">
        <span class="fa fa-play-circle"></span>
        {{movieImages.name}}
      </div>

      <div class="right">
        <div class="stars">
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star-half-o"></span>
          <span class="fa fa-star-o"></span>
        </div>
        <!-- <div class="share">
          <i class="fa fa-share-square"></i> Share
        </div> -->
      </div> <!-- right -->
    </div> <!-- bottom bar -->

  </div> <!-- featured -->
  {{movieImages.name}}
</template>

<script>
// import 'whatwg-fetch';

export default {
  name: 'MovieDetails',
  route: {
    data: function (transition) {
      return fetch(`https://webservice.fanart.tv/v3/movies/${transition.to.params.id}?api_key=eb3b624d1526d41441b1cd8b608415d0`) // eslint-disable-line
        .then(function (response) {
          return { movieImages: response.json() };
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
      data: {}
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
