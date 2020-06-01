<template>
  <div class="container">
    <div class="header">
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <router-link to ='/' class="pure-menu-heading">
          <img src="@/assets/FoDPLogo.png" 
            alt="Friends of Discovery Park Logo"/>
        </router-link>

        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <router-link to="/login" class="pure-menu-link" active-class="active">Login</router-link>
          </li>
          <li class="pure-menu-item">
            <router-link to="/register" class="pure-menu-link">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.header {
  margin-bottom: 150px;
}
.home-menu {
  padding: 0.5em;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.home-menu {
  background: #2d3e50;
}
.pure-menu.pure-menu-fixed {
  /* Fixed menus normally have a border at the bottom. */
  border-bottom: none;
  /* I need a higher z-index here because of the scroll-over effect. */
  z-index: 4;
}

.home-menu .pure-menu-heading {
  color: white;
  font-weight: 400;
  font-size: 120%;
}

.home-menu .pure-menu-selected router-link {
  color: white;
}

.home-menu a {
  color: #6fbef3;
}
.home-menu li a:hover,
.home-menu li a:focus {
  background: none;
  border: none;
  color: #aecfe5;
}
.active {
  color: white;
}
</style>
