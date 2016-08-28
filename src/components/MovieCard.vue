<template>
  <div v-link="{ name: 'movie', params: { id: this.id, name: this.kebabTitle }}" class="movie">
    <img :src="posterUrl" alt="" class="poster" />
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
    poster: {
      type: String,
      default: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg'
    }
  },
  computed: {
    kebabTitle () {
      return _.kebabCase(this.title);
    },
    posterUrl () {
      return `http://image.tmdb.org/t/p/w185//${this.poster}`;
    }
  },
  data () {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
.movie {
  padding: 10px;
  cursor: pointer;
  width: calc(100% * (1/4));
  transition: all .5s ease;

  .poster {
    width: 100%;
    margin-bottom: 6px;
    border-radius: 4px;

    &.active {
      opacity: 0;
    }
  }

  .title {
    color: #525661;
    margin-bottom: 4px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info {
    font-size: 11px;
    opacity: .8;
  }

  .desc {
    display: none;
  }
}
</style>
