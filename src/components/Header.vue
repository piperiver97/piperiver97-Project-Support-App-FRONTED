<!-- src/components/Header.vue -->
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav">
        <div class="nav-item">
          <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
        </div>
        <div class="nav-item">
          <RouterLink to="/request" class="nav-link">Request</RouterLink>
        </div>
        <div class="nav-item">
          <RouterLink to="/requestedit" class="nav-link">Requestedit</RouterLink>
        </div>
        <div class="nav-item">
          <RouterLink to="/requestlist" class="nav-link">Requestlist</RouterLink>
        </div>
        <div class="nav-item">
          <RouterLink to="/supportform" class="nav-link">Supportform</RouterLink>
        </div>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  background-color: #373a40 !important;
  border: 2px solid rgba(0, 0, 0, 0.8);
  max-height: 80px;

  .nav-link {
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
      1px -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000;
    font-size: 20px;
    font-weight: bold;
  }
  
  .nav-item {
    margin: 0 35px; 
  }
}

@media only screen and (max-width: 450px) {
  .nav-item {
    padding: 0 6px !important;
    margin: 0 5px; 
  }

  .nav-link {
    font-size: 12px !important;
  }
}
</style>
