<template>
  <div>
    Table content
    <b-table :items="tableData"></b-table>
  </div>
</template>

<script>
import APIService from '@/services/APIService'
export default {
  name: 'ShowTable',
  data() {
    return {
      tableData: []
    }
  },
  created() {
    console.log(this.$route.params.tablename)
    APIService.getSingleTable(this.$route.params.tablename).then((response) => {
      this.tableData = response.data
      console.table('table data ' + this.tableData)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }
  
}
</script>

<style scoped>
</style>
