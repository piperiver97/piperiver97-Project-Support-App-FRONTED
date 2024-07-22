export default {
  isAuthenticated: false,
  
  login(username, password) {
    if (username === 'admin' && password === '12345') {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  },

  logout() {
    this.isAuthenticated = false;
  }
};
