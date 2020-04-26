<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">Database Tables</h1>        
        </div>
      </div>
    </div>
    <div class="container">
      <TableList />
    </div>
  </div>
</template>

<script>
import TableList from '../components/TableList'


export default {
  name: "TablesPage",
  components: {
    TableList
  }
}
</script>

<style lang="scss" scoped>
  .org-description {
    margin-top: 50px;
  }
</style>