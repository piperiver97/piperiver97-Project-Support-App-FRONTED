export default {
    loadRequests() {
      const requests = JSON.parse(localStorage.getItem('requests')) || [];
  
      requests.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  
      return requests;
    },
    saveRequest(newRequest) {
      const requests = JSON.parse(localStorage.getItem('requests')) || [];
  
      requests.push(newRequest);
  
      localStorage.setItem('requests', JSON.stringify(requests));
    }
  };
  