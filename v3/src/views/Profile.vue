<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <i><strong>{{currentUser.data.first_name}}</strong></i> Profile
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{currentUser.data.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.data.email}}
    </p>
    <strong v-if="currentUser.data.is_admin">You have Admin access</strong>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>