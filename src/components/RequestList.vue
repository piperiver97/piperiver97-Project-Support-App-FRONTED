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

<script>
export default {
  data() {
    return {
      requests: []
    };
  },
  created() {
    this.loadRequests();
  },
  methods: {
    loadRequests() {
      // Obtener solicitudes del almacenamiento local
      const requests = JSON.parse(localStorage.getItem('requests')) || [];

      // Ordenar las solicitudes por fecha de creación
      requests.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

      this.requests = requests;
    }
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
