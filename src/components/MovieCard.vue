<template>
  <a v-link="{ name: 'movie', params: { id: this.id, name:this.kebabTitle }}" class="movie-card-item">
    <img class="cover" :src="img" alt="{{title}}" class="cover" />
    <p class="corner-title">{{title}}</p>
  </a> <!-- featured -->
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .movie-card-item {
    width: 50%;
    float: left;
  }

  .movie-card-item {
    position: relative;
  }
  .movie-card-item .cover {
    width: 100%;
    display: block;
  }
  .movie-card-item .corner-title {
    position: absolute;
    top: 20px;
    left: 20px;
    text-transform: uppercase;
    color: #FFF;
    background: rgba(25, 25, 25, 0.3);
    padding: 10px;
    font-size: 13px;
  }
  .movie-card-item .bottom-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px 30px;
    background: rgba(10, 10, 10, 0.8);
    color: #FFF;
    overflow: hidden;
  }
  .movie-card-item .bottom-bar .title-container {
    float: left;
    font-weight: 100;
    font-size: 40px;
  }
  .movie-card-item .bottom-bar .title-container .fa {
    margin-right: 10px;
    color: #FF3A3A;
  }
  .movie-card-item .bottom-bar .title-container b {
    font-weight: 600;
  }
  .movie-card-item .bottom-bar .right {
    float: right;
    font-size: 14px;
    margin-top: 14px;
  }
  .movie-card-item .bottom-bar .right .stars {
    float: left;
    color: #F0C236;
    margin-right: 20px;
  }
  .movie-card-item .bottom-bar .right .share {
    float: left;
    cursor: pointer;
  }
  .movie-card-item .bottom-bar .right .share .fa {
    margin-right: 5px;
  }
</style>
