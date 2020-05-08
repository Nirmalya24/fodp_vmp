<template>
  <div>
    <h2>User Profile</h2>
    <p>Username: {{user.name}}</p>
  </div>
</template>

<script>
import axios from "axios";
import router from '../router';

export default {
  name: "UserInfo",
  data() {
    return {
      user: {
        name: "TEST"
      }
    }
  },
  methods: {
    getUserData: function() {
      let self = this
      axios.get('api/user')
        .then((res) => {
          console.log(res)
          self.$set(this, "user", res.data.user)
        }).catch(err => {
          console.log(err)
          router.push("/login")
        })
    }
  },
  mounted() {
    this.getUserData()
  },
}
</script>

<style scoped>

</style>