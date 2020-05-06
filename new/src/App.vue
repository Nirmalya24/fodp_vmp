<template>
  <div id="app">
    <div id="nav">
      <NavBar v-if="!$route.meta.hideNavigation"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/partials/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  #app {
    font-family: Lato, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background: #EEF1F4;
  }
</style>
