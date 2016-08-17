<template>
  <li>
    <img :src="img" alt="" class="cover" />
    <p class="title">{{title}}</p>
    <p class="genre">{{genre}}</p>
  </li>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
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
      default: 'https://cms-assets.tutsplus.com/uploads/users/107/posts/22956/final_image/cinema.jpg',
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
