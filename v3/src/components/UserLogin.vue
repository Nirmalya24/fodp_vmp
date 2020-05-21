<template>
  <div class="container my-5">
    <div class="row">
      <b-form class="col-md-6 mx-auto" @submit="login">
        <div class="form-group">
          <input type="email" class="form-control" v-model="form.email" required>
          <label class="form-control-placeholder" for="email">Email</label>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" v-model="form.password" required>
          <label class="form-control-placeholder" for="password">Password</label>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { userService } from '../_services';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      userService.login(this.form)
    }
  }
}
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-control-placeholder {
  position: absolute;
  top: 0;
  padding: 7px 0 0 13px;
  transition: all 200ms;
  opacity: 0.5;
}

.form-control:focus + .form-control-placeholder,
.form-control:valid + .form-control-placeholder {
  font-size: 75%;
  transform: translate3d(0, -100%, 0);
  opacity: 1;
}
input {
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
}
input:focus {
  outline-color: red;
}
</style>
