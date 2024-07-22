
<script>
export default {
  name: 'RequestList',
  props: {
    requests: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    },
    truncateDescription(description) {
      return description.length > 50 ? description.substring(0, 47) + '...' : description;
    },
    editRequest(id) {
      this.$router.push(`/edit/${id}`);
    },
    createNewRequest() {
      this.$router.push('/supportform');
    }
  }
};
</script>
<template>
  <div class="request-list">
    <h2 class="request-list__title">Lista de Solicitudes</h2>
    <table class="request-list__table">
      <thead>
        <tr>
          <th>Nombre del solicitante</th>
          <th>Fecha de la solicitud</th>
          <th>Tema de la consulta</th>
          <th>Descripción</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request.id">
          <td>{{ request.name }}</td>
          <td>{{ formatDate(request.date) }}</td>
          <td>{{ request.subject }}</td>
          <td>{{ truncateDescription(request.description) }}</td>
          <td>
            <button @click="editRequest(request.id)" class="request-list__button">
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="createNewRequest" class="request-list__button request-list__button--create">
      Nueva Solicitud
    </button>
  </div>
</template>



<style scoped>
.request-list {
  color: #00ffff;
  padding: 20px;
  background-color: #0a0a0a;

}

.request-list__title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px #00ffff;
}

.request-list__table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
}

.request-list__table th,
.request-list__table td {
  padding: 12px;
  text-align: left;
  background-color: rgba(0, 255, 255, 0.1);
  border: 1px solid #00ffff;
}

.request-list__table th {
  background-color: rgba(0, 255, 255, 0.2);
  font-weight: bold;
  text-transform: uppercase;
}

.request-list__button {
  background-color: transparent;
  border: 1px solid #00ffff;
  color: #00ffff;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.3s ease;
}

.request-list__button:hover {
  background-color: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

.request-list__button--create {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .request-list__table {
    font-size: 14px;
  }
  
  .request-list__table th,
  .request-list__table td {
    padding: 8px;
  }
  
  .request-list__button {
    padding: 3px 6px;
    font-size: 12px;
  }
}
</style>