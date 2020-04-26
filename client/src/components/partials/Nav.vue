<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <strong class="is-size-4">Friends of Discovery Park</strong>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <span v-if="$auth.isAuthenticated" id="auth-links">
        <router-link to="/tables" class="navbar-item">Tables</router-link>
        <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>
      </span>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- Check that the SDK client is not currently loading before accessing is methods -->
          <div v-if="!$auth.loading">
            <!-- show login when not authenticated -->
            <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Sign in</strong></a>
            <!-- show logout when authenticated -->
            <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: 'Nav',
    methods: {
      login() {
        this.$auth.loginWithRedirect()
      },
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin
        })
      }
    }
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 20px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
  #auth-links {
    display: inherit;
  }
</style>