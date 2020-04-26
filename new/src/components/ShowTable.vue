<template>
  <div>
    <b-table :items="tableData"></b-table>
  </div>
</template>

<script>
import APIService from '../services/APIService'
export default {
  name: 'ShowTable',
  data() {
    return {
      tableData: []
    }
  },
  created() {
    APIService.getSingleTable(this.$route.params.tablename).then((response) => {
      this.tableData = response.data
      console.table(this.tableData)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }
  
}
</script>