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
  <div class="app-container">
    <div class="welcome-section">
      <h1>SupportApp GAME</h1>
      <p>Bienvenido a tu centro de soporte para videojuegos 3D</p>
      <div class="game-visual">
        <!-- Aquí puedes agregar una imagen o animación relacionada con videojuegos 3D -->
        <div class="cube"></div>
      </div>
    </div>
    <div class="login-section">
      <form @submit.prevent="login">
        <h2>Iniciar sesión</h2>
        <div class="input-group">
          <label for="username">Usuario:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div class="input-group">
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Entrar</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  background-color: #0a0a23;
  color: #00ffff;
  font-family: 'Arial', sans-serif;
}

.welcome-section, .login-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
}

.welcome-section {
  background: linear-gradient(45deg, #0a0a23, #1a1a3a);
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 15px #00ffff;
}

.welcome-section p {
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.game-visual {
  perspective: 600px;
}

.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s infinite linear;
}

.cube::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  transform: rotateY(90deg) translateZ(50px);
}

.cube::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  transform: translateZ(50px);
}

@keyframes rotate {
  0% { transform: rotateX(0) rotateY(0); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

.login-section {
  background-color: #1a1a3a;
  box-shadow: -10px 0 20px rgba(0, 0, 0, 0.5);
}

form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  margin-bottom: 30px;
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
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #00ffff;
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgba(0, 255, 255, 0.1);
  color: #ffffff;
  transition: all 0.3s ease;
}

input[type="text"]:focus, input[type="password"]:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

button {
  background-color: #00ffff;
  color: #0a0a23;
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
  background-color: #0a0a23;
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