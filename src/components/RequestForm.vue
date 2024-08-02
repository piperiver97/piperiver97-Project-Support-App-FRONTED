<script setup>
import { ref } from 'vue';
import { useRequestStore } from '../stores/RequestStore';

const emit = defineEmits(['cancel', 'saved']);

const requestStore = useRequestStore();

const newRequest = ref({
  requestName: '',
  subject: '',
  description: '',
  requestDate: '',
});

const resetForm = () => {
  newRequest.value = {
    requestName: '',
    subject: '',
    description: '',
    requestDate: '',
  };
};

const handleSubmit = async () => {
  try {
    // Validar que la fecha esté en formato correcto si es necesario
    if (newRequest.value.requestDate) {
      const date = new Date(newRequest.value.requestDate);
      newRequest.value.requestDate = date.toISOString().split('.')[0];
    }
    // Agregar la solicitud a través del store
    await requestStore.addRequest(newRequest.value);
    // Limpiar el formulario
    resetForm();
    // Emitir el evento 'saved'
    emit('saved');
  } catch (error) {
    console.error('Error submitting the request:', error);
  }
};
</script>

<template>
  <div class="create-request">
    <h1>Crear Nueva Solicitud</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="requestName">Nombre del solicitante:</label>
        <input type="text" v-model="newRequest.requestName" id="requestName" required />
      </div>

      <div class="input-group">
        <label for="requestDate">Fecha:</label>
        <input type="datetime-local" v-model="newRequest.requestDate" id="requestDate" required />
      </div>

      <div class="input-group">
        <label for="subject">Tema de la consulta:</label>
        <input type="text" v-model="newRequest.subject" id="subject" required />
      </div>

      <div class="input-group">
        <label for="description">Descripción de la consulta:</label>
        <textarea v-model="newRequest.description" id="description" required></textarea>
      </div>

      <div class="button-group">
        <button type="button" @click="resetForm" class="reset-btn">Resetear</button>
        <button type="button" @click="() => emit('cancel')" class="cancel-btn">Cancelar</button>
        <button type="submit" class="save-btn">Guardar</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

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
