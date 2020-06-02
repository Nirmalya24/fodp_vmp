<template>
  <div>
    <nav
      id="sidebarMenu"
      
    >
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link :to="{name: 'Dashboard'}" class="nav-link active">
              <home-icon size="1.5x" class="icon-style"></home-icon>
              Dashboard <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Tables' }" class="nav-link">
              <database-icon size="1.5x" class="icon-style"></database-icon>
              Tables
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Maps' }" class="nav-link">
              <map-icon size="1.5x" class="icon-style"></map-icon>
              Maps
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'ReportForms' }" class="nav-link">
              <clipboard-icon size="1.5x" class="icon-style"></clipboard-icon>
              Report Forms
            </router-link>
          </li>
        </ul>

        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>Administration Tools</span>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link :to="{ name: 'UserManagement' }" class="nav-link">
              <users-icon size="1.5x" class="icon-style"></users-icon>
              Manage Users
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'FeatureForecasting' }" class="nav-link">
              <eye-icon size="1.5x" class="icon-stlye"></eye-icon>
              Feature Forecasting
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { HomeIcon, DatabaseIcon, ClipboardIcon,
  UsersIcon, MapIcon, EyeIcon } from 'vue-feather-icons'
export default {
  name: 'DashboardNav',
  components: {
    HomeIcon, DatabaseIcon, ClipboardIcon,
    UsersIcon, MapIcon, EyeIcon
  }
}
</script>