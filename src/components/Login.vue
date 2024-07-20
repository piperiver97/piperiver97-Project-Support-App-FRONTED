<template>
  <div class="login">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <label for="username">Usuario:</label>
      <input type="text" v-model="username" id="username" required />

      <label for="password">Contraseña:</label>
      <input type="password" v-model="password" id="password" required />

      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Verificar las credenciales
      if (this.username === 'admin' && this.password === '12345') {
        // Redirigir a RequestListView si las credenciales son correctas
        this.$router.push('/requestlist'); // Asumiendo que '/request-list' es la ruta a RequestListView
      } else {
        // Mostrar un mensaje de error o hacer algo si las credenciales son incorrectas
        alert('Credenciales incorrectas. Por favor, intente de nuevo.');
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para la vista de login */
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  color: #333;
  font-size: 2rem;
  font-family: 'Arial', sans-serif;
}

form {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}
</style>
