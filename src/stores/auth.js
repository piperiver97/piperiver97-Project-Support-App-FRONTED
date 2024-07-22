export default {
  isAuthenticated: false,
  
  login(username, password) {
    if (username === 'admin' && password === '0') {
      this.isAuthenticated = true;
      return true;
    } else {
      return false
    }
  },

  logout() {
    this.isAuthenticated = false;
  }
};
