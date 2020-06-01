<template>
  <div class="vertical-center">
    <div class="pure-g center">
      <form class="pure-u-1-5" @submit.prevent="handleSubmit">
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
        <button type="submit" class="pure-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { userService } from "../_services";
import { router } from "@/router";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
        submitted: false,
        loading: false,
        returnUrl: '',
        error: ''
      },
      show: true,
    };
  },
  created () {
    //reset login status
    userService.logout();
    // get return url from route parameters or default to '/
    this.returnUrl = this.$route.query.returnUrl || '/';
  },
  methods: {
    handSubmit (e) {
      e.preventDefault();
      this.submitted = true;
      const { email, password } = this;
      // stop if form is invalid
      if( !(email && password))
        return;
      credentials = JSON.stringify({form.email, form.password})
      this.loading = true;
      userService.login(email, password)
        .then(
          user => router.push(this.returnUrl),
          error => {
            this.error = error;
            this.loading = false;
          }
        );
    },
  },
};
</script>

<style></style>
