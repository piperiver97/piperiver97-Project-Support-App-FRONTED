<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRequestStore } from '../stores/RequestStore';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const requestStore = useRequestStore();

const id = ref(route.params.id || '');
const name = ref('');
const date = ref('');
const subject = ref('');
const description = ref('');
const error = ref(null);

const fetchRequest = async () => {
  if (!id.value) return;
  try {
    const request = await requestStore.fetchRequestById(id.value);
    if (request) {
      name.value = request.rname || '';
      date.value = new Date(request.date).toISOString().slice(0, 10) || '';
      subject.value = request.subject || '';
      description.value = request.description || '';
      error.value = null;
    } else {
      error.value = "Solicitud no encontrada";
    }
  } catch (err) {
    error.value = `Error cargando la solicitud: ${err.message}`;
  }
};

onMounted(async () => {
  await fetchRequest();
});

const handleUpdateRequest = async () => {
  try {
    if (!name.value || !date.value) {
      error.value = "Nombre y fecha son obligatorios";
      return;
    }
    const updatedRequest = {
      id: id.value,
      rname: name.value,
      date: new Date(date.value).toISOString(),
      subject: subject.value,
      description: description.value,
    };
    await requestStore.updateRequest(id.value, updatedRequest);
    router.push('/requestlist');
  } catch (err) {
    error.value = `Error actualizando la solicitud: ${err.message}`;
  }
};

const cancel = () => {
  router.push('/requestlist');
};
</script>

<template>
  <div class="edit-request create-request">
    <form @submit.prevent="handleUpdateRequest">
      <h1>Editar Solicitud</h1>

      <div class="input-group">
        <label for="name">Nombre del solicitante:</label>
        <input type="text" v-model="name" id="name" required />
      </div>

      <div class="input-group">
        <label for="date">Fecha de la solicitud:</label>
        <input type="date" v-model="date" id="date" required />
      </div>

      <div class="input-group">
        <label for="subject">Tema de la consulta:</label>
        <input type="text" v-model="subject" id="subject" required />
      </div>

      <div class="input-group">
        <label for="description">Descripción de la consulta:</label>
        <textarea v-model="description" id="description" required></textarea>
      </div>

      <div class="button-group">
        <button type="button" @click="cancel" class="cancel-btn">Cancelar</button>
        <button type="submit" class="save-btn">Guardar cambios</button>
      </div>

      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
/* ... mantén los estilos existentes ... */

input:disabled,
textarea:disabled {
  background-color: rgba(10, 10, 35, 0.3);
  cursor: not-allowed;
}

.error-message {
  color: #ff4444;
  margin-top: 10px;
  text-align: center;
}
.create-request {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a23, #1a1a3a);
  padding: 20px;
  color: #00ffff;
}

form {
  background: rgba(26, 26, 58, 0.8);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  width: 100%;
  max-width: 600px;
  border: 1px solid #00ffff;
}

h1 {
  margin-bottom: 30px;
  color: #00ffff;
  font-size: 2.5rem;
  font-family: 'Arial', sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 15px #00ffff;
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
  }
  to {
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
  }
}

.input-group {
  margin-bottom: 25px;
  position: relative;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input[type="text"],
input[type="datetime-local"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #00ffff;
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgba(10, 10, 35, 0.6);
  color: #ffffff;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="datetime-local"]:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  background-color: rgba(10, 10, 35, 0.8);
}

input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  filter: invert(1) hue-rotate(180deg);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

button {
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  transition: all 0.3s ease;
  flex: 1;
  margin: 0 5px;
  position: relative;
  overflow: hidden;
}

button::before {
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

button:hover::before {
  left: 100%;
}

.save-btn {
  background: linear-gradient(45deg, #00ffff, #00cccc);
  color: #0a0a23;
  border: none;
}

.save-btn:hover {
  background: linear-gradient(45deg, #00cccc, #00ffff);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
}

.cancel-btn,
.reset-btn {
  background-color: transparent;
  color: #00ffff;
  border: 1px solid #00ffff;
}

.cancel-btn:hover,
.reset-btn:hover {
  background-color: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

@media (max-width: 768px) {
  form {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  input[type="text"],
  input[type="datetime-local"],
  textarea {
    font-size: 0.9rem;
  }

  .button-group {
    flex-direction: column;
  }

  button {
    margin: 5px 0;
  }
}

@media (max-width: 480px) {
  form {
    padding: 15px;
  }

  h1 {
    font-size: 1.5rem;
  }

  input[type="text"],
  input[type="datetime-local"],
  textarea {
    font-size: 0.8rem;
    padding: 8px;
  }

  button {
    font-size: 0.9rem;
    padding: 10px 15px;
  }
}
</style>
