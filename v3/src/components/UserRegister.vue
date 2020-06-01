<template>
  <div class="vertical-center">
    <div class="pure-g center">
      <form class="pure-u-1-5">
        <div class="form-group">
          <input type="text" id="first-name" class="form-control" required />
          <label class="form-control-placeholder" for="first-name">First Name</label>
        </div>
        <div class="form-group">
          <input type="text" id="last-name" class="form-control" required />
          <label class="form-control-placeholder" for="last-name">Last Name</label>
        </div>
        <div class="form-group">
          <input type="text" id="email" class="form-control" required />
          <label class="form-control-placeholder" for="email">Email</label>
        </div>
        <div class="form-group">
          <input type="password" id="password" class="form-control" required />
          <label class="form-control-placeholder" for="password"
            >Password</label
          >
        </div>
        <div class="form-group">
          <input type="password" id="confirm-password" class="form-control" required />
          <label class="form-control-placeholder" for="confirm-password"
            >Confirm Password</label
          >
        </div>
        <button type="submit" class="pure-button">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
</style>
