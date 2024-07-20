<script>
export default {
  data() {
    return {
      requests: []
    };
  },
  created() {
    // Obtener la lista de solicitudes desde la base de datos
    // Ejemplo: this.requests = fetchRequestsFromDatabase();
  }
};
</script>
<template>
  <div class="request-list">
    <h1>Lista de Solicitudes</h1>
    <ul>
      <li v-for="request in requests" :key="request.id">
        <router-link :to="'/edit/' + request.id">{{ request.subject }}</router-link>
      </li>
    </ul>
  </div>
</template>



<style scoped>
/* Estilos para la lista de solicitudes */
</style>
