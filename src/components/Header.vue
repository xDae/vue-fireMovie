<template>
  <header>
    <nav></nav>
    <h1>Vue<strong>movieFire</strong></h1>
    <!-- <form class="header-form" method="post">
      <input class="header-form-input" type="text" name="name" value="" placeholder="Search film">
    </form> -->
    <div class="search">
      <svg>
        <use xlink:href="#ico-search"></use>
      </svg>
    </div>
  </header>

  <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none;">
    <symbol id="close" viewBox="0 0 212.982 212.982">
      <g>
        <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z" fill="#525661"/>
      </g>
    </symbol>
    <symbol id="ico-search">
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#363a47" d="M14.769,14.769c-0.342,0.342-0.896,0.342-1.237,0l-3.756-3.756
      c-2.399,1.793-5.801,1.623-7.981-0.557c-2.392-2.392-2.392-6.271,0-8.663s6.271-2.392,8.662,0c2.18,2.181,2.35,5.583,0.557,7.981
      l3.756,3.756C15.11,13.873,15.11,14.427,14.769,14.769z M9.219,3.032c-1.709-1.709-4.479-1.709-6.188,0
      c-1.708,1.708-1.708,4.479,0,6.188c1.709,1.708,4.479,1.708,6.188,0C10.927,7.51,10.927,4.74,9.219,3.032z"/>
    </symbol>
  </svg>
</template>

<script>
export default {
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 30px;

  h1 {
    font-size: 20px;
    text-align: center;
    color: #1c222b;

    strong {
      background: #41B883;
      color: #fff;
      display: inline-block;
      border-radius: 30px;
      padding: 6px;
      font-size: 83%;
      line-height: 1;
      position: relative;
      top: -1px;
      left: 2px;
    }
  }

  nav {
    position: relative;
    cursor: pointer;
    width: 18px;
    height: 18px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #363a47;
      border-radius: 2px;
      box-shadow: 0 5px 0 #363a47, 0 10px 0 #363a47;
    }
  }

  .search {
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .header-form {
    flex-grow: 1;
    padding: 0 40px;
  }

  .header-form-input {
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 20px;
  }
}
</style>
