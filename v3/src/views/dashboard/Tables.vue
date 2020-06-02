<template>
  <div>
    <h1>Tables</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Table Name</th>
          <th scope="col">Show</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="table in content" :key="table.id">
          <td>{{ table.table_name }}</td>
          <td>
            <router-link
              :to="{ name: 'Show', params: { tablename: table.table_name } }"
            >
              <button type="button" class="btn btn-success">Show</button>
            </router-link>
          </td>
          <td>
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserService from '@/services/user.service';

export default {
  name: 'Tables',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getTables().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style></style>
