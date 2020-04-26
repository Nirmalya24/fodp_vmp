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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
