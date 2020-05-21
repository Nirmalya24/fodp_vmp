<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./views/partials/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
