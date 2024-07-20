<template>
  <div class="create-request">
    <h1>Crear Solicitud</h1>
    <form @submit.prevent="submitRequest">
      <label for="name">Nombre del solicitante:</label>
      <input type="text" v-model="name" id="name" required />

      <label for="date">Fecha de la solicitud:</label>
      <input type="date" v-model="date" id="date" required />

      <label for="subject">Tema de la consulta:</label>
      <input type="text" v-model="subject" id="subject" required />

      <label for="description">Descripción de la consulta:</label>
      <textarea v-model="description" id="description" required></textarea>

      <div class="button-group">
        <button type="button" @click="resetForm">Resetear</button>
        <button type="button" @click="cancel">Cancelar</button>
        <button type="submit">Validar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      date: '',
      subject: '',
      description: ''
    };
  },
  methods: {
    submitRequest() {
      // Implementar lógica para guardar la nueva solicitud
      this.$router.push('/list');
    },
    resetForm() {
      this.name = '';
      this.date = '';
      this.subject = '';
      this.description = '';
    },
    cancel() {
      this.$router.push('/list');
    }
  }
};
</script>

<style scoped>
/* Estilos para el formulario de solicitud */
.create-request {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f7f7;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  color: #444;
  font-size: 1.8rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

form {
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #666;
}

input[type="text"],
input[type="date"],
textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="date"]:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
}

button:hover {
  background-color: #0056b3;
}

button[type="button"] {
  background-color: #6c757d;
}

button[type="button"]:hover {
  background-color: #5a6268;
}
</style>
