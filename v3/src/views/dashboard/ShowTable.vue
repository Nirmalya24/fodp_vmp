<template>
  <div>
    <h2>{{this.$route.params.tablename}}</h2>
    <table class="table">
      <template v-for="table in content">
        <tr v-for="row in table" :key="row.gid">{{row}}</tr>
      </template>
    </table>
  </div>
</template>

<script>
import UserService from '@/services/user.service';
export default {
  name: 'ShowTable',
  data() {
    return {
      content: []
    }
  },
  created() {
    UserService.getTable(this.$route.params.tablename).then(
      response => {
        this.content = response.data;
        console.table(this.content)
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
  
}
</script>