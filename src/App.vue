<script setup>
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <Header></Header> 
    <RouterLink/>
    <router-view />
    
  </div>
</template>

<style scoped>

</style>
