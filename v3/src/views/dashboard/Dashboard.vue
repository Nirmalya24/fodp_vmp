<template>
  <div>
    <h1>Dashboard</h1>
    <div class="row">
      <DashboardNav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"/>
      <section class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        Section
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import DashboardNav from '@/views/dashboard/DashboardNav.vue';
export default {
  name: 'Dashboard',
  components: {
    DashboardNav
  }
};
</script>

<style scoped>
.mainBody {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 1rem 0;
  padding: 1rem 0;
}
</style>
