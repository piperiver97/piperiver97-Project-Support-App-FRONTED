<script setup>
import { useRequestStore } from '../stores/RequestStore';
import { useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';

const requestStore = useRequestStore();
const router = useRouter();
const requests = ref([]);

onMounted(async () => {
  try {
    await requestStore.fetchAllRequests();
    requests.value = requestStore.requests;
  } catch (error) {
    console.error('Error fetching requests:', error);
  }
});

const formatDate = (dateString) => {
  if (!dateString) return 'Fecha no disponible';
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? 'Fecha inválida' : date.toLocaleDateString();
};

const truncateDescription = (description) => {
  return description && description.length > 50 ? description.substring(0, 47) + '...' : description || 'Sin descripción';
};

const editRequest = (id) => {
  router.push(`/requestedit/${id}`);
};

const deleteRequest = async (id) => {
  const confirmed = window.confirm('¿Estás seguro de que quieres eliminar esta solicitud?');
  if (confirmed) {
    try {
      await requestStore.deleteRequest(id);
      requests.value = requests.value.filter(request => request.id !== id);
    } catch (error) {
      console.error('Error eliminando la solicitud:', error);
    }
  }
};

const createNewRequest = () => {
  router.push('/supportform');
};

const sortedRequests = computed(() => {
  return [...requests.value].sort((a, b) => new Date(b.date) - new Date(a.date));
});
</script>

<template>
  <div class="request-list">
    <h2 class="request-list__title">Lista de Solicitudes</h2>
    <div class="request-list__table-container">
      <table class="request-list__table">
        <thead>
          <tr>
            <th>Nombre del solicitante</th>
            <th>Fecha de la solicitud</th>
            <th>Tema de la consulta</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in sortedRequests" :key="request.id">
            <td>{{ request.name || 'Nombre no disponible' }}</td>
            <td>{{ formatDate(request.date) }}</td>
            <td>{{ request.subject || 'Sin tema' }}</td>
            <td>{{ truncateDescription(request.description) }}</td>
            <td>
              <button @click="editRequest(request.id)" class="request-list__button" aria-label="Editar solicitud">
                Editar
              </button>
              <button @click="deleteRequest(request.id)" class="request-list__button request-list__button--delete" aria-label="Eliminar solicitud">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="createNewRequest" class="request-list__button request-list__button--create">
      Nueva Solicitud
    </button>
  </div>
</template>

<style scoped>
.request-list {
  color: #00ffff;
  padding: 20px;
  background: linear-gradient(135deg, #0a0a23, #1a1a3a);
  min-height: 100vh;
}

.request-list__title {
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 15px #00ffff;
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff;
  }
  to {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
  }
}

.request-list__table-container {
  overflow-x: auto;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  border-radius: 10px;
}

.request-list__table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: rgba(10, 10, 35, 0.8);
}

.request-list__table th,
.request-list__table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 255, 255, 0.3);
}

.request-list__table th {
  background-color: rgba(0, 255, 255, 0.1);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #00ffff;
}

.request-list__table tr:hover {
  background-color: rgba(0, 255, 255, 0.05);
}

.request-list__button {
  background-color: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  cursor: pointer;
  padding: 8px 15px;
  transition: all 0.3s ease;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.request-list__button:hover {
  background-color: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
}

.request-list__button--create {
  display: block;
  margin: 30px auto 0;
  padding: 12px 25px;
  font-size: 18px;
  background: linear-gradient(45deg, #00ffff, #00cccc);
  color: #0a0a23;
  border: none;
  position: relative;
  overflow: hidden;
}

.request-list__button--create::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(45deg);
  z-index: 1;
  transition: all 0.3s ease;
}

.request-list__button--create:hover::before {
  left: 100%;
}

.request-list__button--delete {
  border-color: #ff0000;
  color: #ff0000;
}

.request-list__button--delete:hover {
  background-color: rgba(255, 0, 0, 0.2);
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.7);
}

@media (max-width: 768px) {
  .request-list__table {
    font-size: 14px;
  }
  
  .request-list__table th,
  .request-list__table td {
    padding: 10px;
  }
  
  .request-list__button {
    padding: 5px 10px;
    font-size: 12px;
  }

  .request-list__button--create {
    font-size: 16px;
    padding: 10px 20px;
  }
}
</style>
