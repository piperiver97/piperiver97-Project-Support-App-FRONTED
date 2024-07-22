<script>
import RequestList from './RequestList.vue';

export default {
  name: 'RequestManager',
  components: {
    RequestList
  },
  data() {
    return {
      requests: []
    };
  },
  methods: {
    addRequest(newRequest) {
      this.requests.push(newRequest);
    }
  }
};
</script>
<template>
    <div>
      <router-view @request-created="addRequest"></router-view>
      <request-list :requests="requests"></request-list>
    </div>
  </template>
  
 
  