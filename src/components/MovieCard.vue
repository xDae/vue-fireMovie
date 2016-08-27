<template>
  <div v-link="{ name: 'movie', params: { id: this.id, name:this.kebabTitle }}" class="movie">
    <img src="http://movium.io/data/posters/eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg" alt="" class="poster" />
    <div class="title">{{title}}</div>
    <div class="info">
      <span class="length">117 min</span>
      <span class="year">2015</span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'MovieCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    genre: {
      type: Array
    },
    img: {
      type: String,
      default: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg'
    }
  },
  computed: {
    kebabTitle () {
      return _.kebabCase(this.title);
    }
  },
  data () {
    return {
    };
  }
};
</script>

<style>

</style>
