<template>
  <!-- NOT YET RESPONSIVE -->
  <b-container class="text-left">
    <b-row align-h="center" class="mt-5">
      <b-col cols="5">
        <b-card class="p-3">
          <h3 class="mb-4">Login</h3>
          <b-form @submit="login">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                v-model="form.password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="remember">Remember Me</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <div class="d-flex justify-content-between">
              <b-button type="submit" variant="primary">Submit</b-button>
              <a href="#">Forgot Password</a>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "", // TODO: encrypt on server side using "https://www.npmjs.com/package/bcrypt"
        checked: []
      },
      show: true
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      axios
        .post("/api/login", this.form) // TODO: change url to api
        .then(res => JSON.parse(res.data.data)) // REMOVE - for testing
        .then(console.log)
        .catch(console.error);
    }
  }
};
</script>

<style scoped></style>
