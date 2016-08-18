<template>
  <a v-link="{ name: 'movie', params: { id: this.id }}" class="featured-movie">
    <img class="cover" :src="img" alt="" class="cover" />
    <p class="corner-title">{{title}}</p>
  </a> <!-- featured -->
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    genre: {
      type: Array,
    },
    img: {
      type: String,
      default: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg',
    },
  },
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .featured-movie {
    width: 50%;
    float: left;
  }
</style>
