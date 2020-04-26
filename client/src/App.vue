<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/partials/Nav'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
