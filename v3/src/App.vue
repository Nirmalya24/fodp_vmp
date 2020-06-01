<template>
  <div id="app">
    <NavBar v-if="['/', '/login', '/register'].indexOf($route.name) > -1"/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
