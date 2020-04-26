<template>
  <div>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <a href="#">Import Shapefile</a>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Table name</th>
                <th>Show</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="table in tables"
                :key="table.id">
                <td>{{ table.tablename }}</td>
                <td>
                  <router-link :to="{name: 'show', params: {tableName: table.tablename} }">
                    <b-button pill variant="success">Show</b-button>
                  </router-link>
                </td>
                <td>
                  <b-button pill variant="danger">Delete</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import APIService from '../services/APIService'
export default {
  name: 'TablesPage',
  data() {
    return {
      tables: []
    }
  },
  created() {
    APIService.getTables().then((response) => {
      this.tables = response.data
    }).catch((error) => {
      console.log(error.response.data)
    })
  }
  
}
</script>