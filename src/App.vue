<template>
  <div class="window-margin">
	<div class="window">

		<aside class="sidebar">
			<div class="top-bar">
				<p class="logo">Vue FireMovie</p>
			</div>

			<menu class="menu">
				<p class="menu-name">Movie trailers</p>
				<ul>
					<li class="active">
						<a href="#">Action / Adventure</a>
						<ul>
							<li><a href="#">Latest</a></li>
							<li class="active"><a href="#">Popular</a></li>
							<li><a href="#">Coming soon</a></li>
							<li><a href="#">Staff picks</a></li>
						</ul>
					</li>
					<li><a href="#">Animation</a></li>
					<li><a href="#">Comedy</a></li>
					<li><a href="#">Documentaries</a></li>
					<li><a href="#">Drama</a></li>
					<li><a href="#">Horror</a></li>
					<li><a href="#">Sci-Fi  / Fantasy</a></li>
					<li><a href="#">List A-Z</a></li>
				</ul>

				<div class="separator"></div>

				<ul class="no-bullets">
					<li><a href="#">Latest news</a></li>
					<li><a href="#">Critic reviews</a></li>
					<li><a href="#">Box office</a></li>
					<li><a href="#">Top 250</a></li>
				</ul>

				<div class="separator"></div>
			</menu>
		</aside>

		<div class="main" role="main">

			<div class="top-bar">

				<div class="profile-box">
					<div class="circle"></div>
					<span class="arrow fa fa-angle-down"></span>
				</div>

				<ul class="top-menu">
					<li class="menu-icon trigger-sidebar-toggle">
						<div class="line"></div>
						<div class="line"></div>
						<div class="line"></div>
					</li>
					<li><a href="#">Headlines</a></li>
					<li><a href="#">Articles</a></li>
					<li class="active"><a href="#">Movies & Films</a></li>
					<li><a href="#">Television</a></li>
					<li><a href="#">Music</a></li>
					<li><a href="#">Celebrities</a></li>
				</ul>

			</div> <!-- top bar -->

      <div class="search-box">
				<input type="text" placeholder="Search..."/>
				<p class="fa fa-search"></p>
			</div>

      <div class="title-bar">
        <div class="left">
          <p class="bold">Popular Trailers</p>
          <p class="grey">Action / Adventure</p>
        </div> <!-- left -->
        <div class="right">
          <a class="blue" href="#">Rating <i class="fa fa-angle-down"></i></a>
          <a href="#">Newest</a>
          <a href="#">Oldest</a>
        </div> <!-- right -->
      </div> <!-- title-bar -->

      <router-view></router-view>

		</div> <!-- main -->

	</div> <!-- window -->
</div> <!-- window margin -->
</template>

<script>
// import MovieList from './components/MovieList';

export default {
  components: {
    // MovieList,
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css";
@import url(http://fonts.googleapis.com/css?family=Open+Sans:600,300,100|Open+Sans+Condensed:300);
@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

* {
  box-sizing: border-box;
}

body {
  background: #FFF linear-gradient(to bottom, #3F567C, #B5CCC6) no-repeat;
  font-family: Open Sans, sans-serif;
}

a {
  text-decoration: none;
  transition-duration: .3s;
}

a:hover {
  transition-duration: .05s;
}

.window-margin {
  max-width: 1200px;
  padding: 60px;
  margin: auto;
}

.window {
  margin: auto;
  border-radius: 5px;
  background: #FFF;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.window .sidebar .top-bar,
.window .main .top-bar {
  height: 65px;
  color: #FFF;
}

.window .sidebar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background: #24282C;
  transition-duration: .3s;
  color: #DDD;
}

.window .sidebar .top-bar {
  background: #3AB0FF;
  overflow: hidden;
}

.window .sidebar .top-bar .logo {
  float: left;
  font-family: Open Sans Condensed, sans-serif;
  font-size: 40px;
  line-height: 65px;
  margin-left: 20px;
}

.search-box {
  background: #373D41;
  padding: 20px;
  position: relative;
}

.search-box input {
  font-size: 24px;
  font-weight: 300;
  width: 100%;
  border: 0;
  padding: 10px 20px;
  border-radius: 1px;
  outline: none;
  color: #999;
  transition-duration: .3s;
}
.search-box input:focus {
  color: #333;
}
.search-box input:focus ~ .fa {
  color: #999;
}
.search-box .fa {
  position: absolute;
  top: 31px;
  right: 35px;
  color: #CCC;
  transition-duration: .3s;
  cursor: pointer;
}
.window .sidebar .menu {
  padding-top: 20px;
}
.window .sidebar .menu .separator {
  border-top: 1px solid #111111;
  border-bottom: 1px solid #353535;
  margin: 20px;
}
.window .sidebar .menu a {
  color: #DDD;
  text-decoration: none;
}
.window .sidebar .menu a:hover {
  color: #FFF;
}
.window .sidebar .menu .menu-name {
  text-transform: uppercase;
  padding: 0 20px;
  font-size: 14px;
  margin-bottom: 10px;
}
.window .sidebar .menu > ul.no-bullets > li a:before {
  content: none !important;
}
.window .sidebar .menu > ul > li {
  list-style: none;
}
.window .sidebar .menu > ul > li > a {
  position: relative;
  top: -3px;
  font-size: 14px;
  padding: 8px 25px;
  display: block;
  font-weight: bold;
}
.window .sidebar .menu > ul > li > a:before {
  content: '';
  height: 9px;
  width: 9px;
  border-radius: 50px;
  display: inline-block;
  margin-right: 10px;
  box-shadow: inset 0 0 0 1px #EEE;
}
.window .sidebar .menu > ul > li.active {
  list-style-type: disc;
  color: #FF3A3A;
  padding-bottom: 10px;
}
.window .sidebar .menu > ul > li.active > a {
  padding-bottom: 0;
}
.window .sidebar .menu > ul > li.active > a:before {
  background: #FF3A3A;
  box-shadow: none;
}
.window .sidebar .menu > ul > li.active ul {
  display: block;
  margin-left: 50px;
  margin-top: 5px;
}
.window .sidebar .menu > ul > li.active ul li.active a {
  color: #FFF;
  font-weight: bold;
}
.window .sidebar .menu > ul > li.active ul li a {
  padding: 5px;
  display: block;
  font-size: 13px;
  color: #888;
}
.window .sidebar .menu > ul > li.active ul li a:hover {
  color: #FFF;
}
.window .sidebar .menu > ul > li ul {
  display: none;
}
.window .main {
  margin-left: 250px;
  transition-duration: .3s;
  position: relative;
}
.window .main .top-bar {
  background: #279CEB;
}
.window .main .top-bar .top-menu {
  height: 65px;
  overflow: hidden;
}
.window .main .top-bar .top-menu .menu-icon {
  padding: 27px 20px 20px 18px;
  display: none;
  cursor: pointer;
  transition-duration: .3s;
}
.window .main .top-bar .top-menu .menu-icon:hover {
  background: #54baff;
  transition-duration: .05s;
}
.window .main .top-bar .top-menu .menu-icon .line {
  height: 2px;
  width: 20px;
  background: #FFF;
  margin-bottom: 4px;
}
.window .main .top-bar .top-menu li {
  float: left;
  font-size: 14px;
}
.window .main .top-bar .top-menu li.active a,
.window .main .top-bar .top-menu li.active a:hover {
  background: #3AB0FF;
  color: #FFF;
  font-weight: bold;
}
.window .main .top-bar .top-menu a {
  padding: 0 25px;
  color: #EEE;
  line-height: 65px;
  display: block;
}
.window .main .top-bar .top-menu a:hover {
  color: #FFF;
  background: rgba(58, 176, 255, 0.35);
}
.window .main .top-bar .profile-box {
  float: right;
  background: #3AB0FF;
  height: 65px;
  line-height: 65px;
  padding: 0 20px;
  cursor: pointer;
}
.window .main .top-bar .profile-box .circle {
  background: #FFF;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  display: block;
  float: left;
  margin-top: 15px;
}
.window .main .top-bar .profile-box .arrow {
  float: left;
  margin-left: 10px;
  line-height: 65px;
}
.window .main .featured-movie {
  position: relative;
}
.window .main .featured-movie .cover {
  width: 100%;
  display: block;
}
.window .main .featured-movie .corner-title {
  position: absolute;
  top: 20px;
  left: 20px;
  text-transform: uppercase;
  color: #FFF;
  background: rgba(25, 25, 25, 0.3);
  padding: 10px;
  font-size: 13px;
}
.window .main .featured-movie .bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  background: rgba(10, 10, 10, 0.8);
  color: #FFF;
  overflow: hidden;
}
.window .main .featured-movie .bottom-bar .title-container {
  float: left;
  font-weight: 100;
  font-size: 40px;
}
.window .main .featured-movie .bottom-bar .title-container .fa {
  margin-right: 10px;
  color: #FF3A3A;
}
.window .main .featured-movie .bottom-bar .title-container b {
  font-weight: 600;
}
.window .main .featured-movie .bottom-bar .right {
  float: right;
  font-size: 14px;
  margin-top: 14px;
}
.window .main .featured-movie .bottom-bar .right .stars {
  float: left;
  color: #F0C236;
  margin-right: 20px;
}
.window .main .featured-movie .bottom-bar .right .share {
  float: left;
  cursor: pointer;
}
.window .main .featured-movie .bottom-bar .right .share .fa {
  margin-right: 5px;
}
.window .main .title-bar {
  padding: 20px;
  border-bottom: 1px solid #DDD;
  overflow: hidden;
}
.window .main .title-bar .left {
  float: left;
  font-size: 15px;
  text-transform: uppercase;
}
.window .main .title-bar .left .grey {
  color: #999;
}
.window .main .title-bar .left .bold {
  font-weight: bold;
}
.window .main .title-bar .left p {
  display: inline-block;
  margin-right: 10px;
}
.window .main .title-bar .right {
  float: right;
}
.window .main .title-bar .right a {
  color: #999;
  margin-left: 10px;
}
.window .main .title-bar .right a.blue {
  color: #279CEB;
}
.window .main .movie-list .list {
  margin: 20px;
  margin-right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.window .main .movie-list .list li {
  flex: 0 0 130px;
  padding-bottom: 30px;
  margin-right: 20px;
  position: relative;
}
.window .main .movie-list .list li:hover:after {
  opacity: 1;
}
.window .main .movie-list .list li:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 195px;
  content: '\f144';
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  opacity: 0;
  color: #FFF;
  font-size: 40px;
  display: block;
  cursor: pointer;
  line-height: 195px;
  text-align: center;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
}
.window .main .movie-list .list li img {
  width: 130px;
  height: 195px;
  display: block;
  margin: 0 auto 5px auto;
  cursor: pointer;
}
.window .main .movie-list .list li .title,
.window .main .movie-list .list li .genre {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
.window .main .movie-list .list li .title {
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 4px;
}
.window .main .movie-list .list li .genre {
  color: #999;
  font-size: 12px;
}
.window .main .movie-list .load-more {
  background: #EEE;
  padding: 15px;
  margin: 20px;
  border-radius: 5px;
  text-align: center;
  color: #666;
  display: block;
}

.window .main .movie-list .load-more:hover {
  background: #DDD;
}

.window .main .movie-list .load-more .fa {
  margin-left: 10px;
}

@media only screen and (max-width: 1220px) {
  .window > .sidebar {
    transform: translateX(-250px);
  }
  .window > .main {
    margin-left: 0;
  }
  .window > .main .top-bar .top-menu .menu-icon {
    display: block;
  }
  .sidebar-is-open .window > .sidebar {
    transform: translateX(0);
  }
  .sidebar-is-open .window > .main {
    transform: translateX(250px);
  }
}

@media only screen and (max-width: 960px) {
  .window .main .featured-movie .bottom-bar {
    position: static;
  }
  .window .main .featured-movie .bottom-bar .title-container {
    font-size: 25px;
  }
}
</style>
