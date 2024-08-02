<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import auth from '../stores/auth';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <img src="/public/Icon/_68483375-2be2-4211-bd1f-ccb7aa70aeba-ai-brush-removebg-yjo7pd1m.png" alt="Logo" class="navbar-logo"/>
        <RouterLink to="/" class="navbar-name">SupportApp GAME</RouterLink>
      </div>
      <div class="navbar-links" :class="{ 'active': isMenuOpen }">
        <RouterLink to="/" class="navbar-item">Inicio</RouterLink>
        <RouterLink to="/requestlist" class="navbar-item">Lista</RouterLink>
        <RouterLink to="/supportform" class="navbar-item">Soporte</RouterLink>
        <RouterLink to="/requestedit/:id" class="navbar-item">Editar</RouterLink>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #0a0a23, #1a1a3a);
  border-bottom: 2px solid #00ffff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 255, 255, 0.3);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-logo {
  width: 40px; 
  height: 40px; 
  border-radius: 50%;
  border: 2px solid #00ffff;
  box-shadow: 0 0 15px #00ffff;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(0, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0); }
}

.navbar-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ffff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px #00ffff;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.navbar-item {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.navbar-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.navbar-item:hover::before {
  left: 100%;
}

.navbar-item:hover {
  background-color: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  color: #00ffff;
}

.logout-btn {
  background: none;
  border: 1px solid #00ffff;
  cursor: pointer;
  font-size: 1rem;
  color: #00ffff;
}

.logout-btn:hover {
  background-color: #00ffff;
  color: #0a0a23;
}

.menu-icon {
  display: none;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #00ffff;
  margin: 5px 0;
  transition: 0.4s;
  box-shadow: 0 0 5px #00ffff;
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, #0a0a23, #1a1a3a);
    padding: 1rem 0;
    border-top: 2px solid #00ffff;
  }

  .navbar-links.active {
    display: flex;
  }

  .menu-icon {
    display: block;
  }

  .navbar-item {
    padding: 1rem 2rem;
  }
}
</style>
