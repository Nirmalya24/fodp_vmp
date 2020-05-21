<template>
  <div id="HomePage">
    <h1>hello</h1>
    <div id="bg">
      <img src="../assets/aerial_discovery_park.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bg {
  position: fixed; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
}
#bg img {
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
}
</style>
