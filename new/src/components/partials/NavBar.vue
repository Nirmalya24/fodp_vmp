<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand to="/">Friends of Discovery Park</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/tables">Tables</b-nav-item>
        <b-nav-item to="/dashboard">Dashboard</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to='/login' v-if="!$route.meta.hideLoginOption">Sign in</b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  #nav {
    margin-bottom: 2em;
    background: #141414;
  }
</style>