<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>Tables</tr>
      </thead>
      <tbody>
        <!-- <tr v-for="table in tables" v-bind:key="table._id">
          {{table}}
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import TableService from '@/services/TableService.js'

export default {
  name: 'TableList',
  created() {
    TableService.getTables().then((response) => {
      console.log("THEN")
      console.log(response.data)
    }).catch((error => {
      console.log("Error")
      console.log(error.response.data)
    }))
  }
  
}
</script>

<style lang="scss" scoped>

</style>