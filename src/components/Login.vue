<script>
import auth from '../stores/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (auth.login(this.username, this.password)) {
        this.$router.push('/requestlist');
      } else {
        this.errorMessage = 'Credenciales incorrectas. Por favor, intente de nuevo.';
      }
    }
  }
};
</script>

<template>
  <div class="login">
    <form @submit.prevent="login">
      <h1>Iniciar sesión</h1>
      <div class="input-group">
        <label for="username">Usuario:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div class="input-group">
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Iniciar sesión</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<style scoped>
.login {
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
  max-width: 400px;
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

input[type="text"], input[type="password"] {
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

input[type="text"]:focus, input[type="password"]:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

button {
  background-color: #00ffff;
  color: #0a0a0a;
  border: none;
  padding: 12px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #0a0a0a;
  color: #00ffff;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

.error {
  color: #ff4444;
  margin-top: 15px;
  font-size: 1rem;
  text-align: center;
}
</style>