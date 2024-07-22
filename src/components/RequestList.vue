<script>
import requestStore from '../stores/RequestStore'; 

export default {
  data() {
    return {
      requests: []
    };
  },
  created() {
    this.requests = requestStore.loadRequests();
  }
};
</script>
<template>
  <div class="request-list">
    <h1>Lista de Solicitudes</h1>
    <ul>
      <li v-for="request in requests" :key="request.id">
        <router-link :to="'/detail/' + request.id">{{ request.subject }}</router-link>
      </li>
    </ul>
  </div>
</template>



<style scoped>
</style>
