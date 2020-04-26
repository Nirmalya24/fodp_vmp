<template>
  <div>
    <b-table bordered dark hover :items="tables"></b-table>
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