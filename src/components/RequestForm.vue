<template>
  <div class="create-request">
    <h1>Crear Solicitud</h1>
    <form @submit.prevent="submitRequest">
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
        <button type="button" @click="resetForm" class="reset-btn">Resetear</button>
        <button type="button" @click="cancel" class="cancel-btn">Cancelar</button>
        <button type="submit" class="save-btn">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
import requestStore from '../stores/RequestStore'; 

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
      const newRequest = {
        id: Date.now(),
        name: this.name,
        date: this.date,
        subject: this.subject,
        description: this.description,
        created_at: new Date().toISOString()
      };

      requestStore.saveRequest(newRequest);

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
</style>


<style scoped>
</style>

<style scoped>
.create-request {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0a0a0a;
  padding: 20px;
}

form {
  background: #1a1a1a;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  width: 100%;
  max-width: 600px;
}

h1 {
  margin-bottom: 30px;
  color: #00ffff;
  font-size: 2rem;
  font-family: 'Arial', sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px #00ffff;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #00ffff;
}

input[type="text"],
input[type="date"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #00ffff;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #0a0a0a;
  color: #ffffff;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="date"]:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
}

.save-btn {
  background-color: #00ffff;
  color: #0a0a0a;
  border: none;
}

.save-btn:hover {
  background-color: #0a0a0a;
  color: #00ffff;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
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
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

@media (max-width: 768px) {
  form {
    padding: 20px;
  }

  h1 {
    font-size: 1.5rem;
  }

  input[type="text"],
  input[type="date"],
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
    font-size: 1.2rem;
  }

  input[type="text"],
  input[type="date"],
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