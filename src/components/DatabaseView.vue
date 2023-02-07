<template>

  <br>
  <br>
  <br>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.nutzerid }} ({{ user.nutzername }})</li>
  </ul>
  <br>

</template>

<script>
import {defineComponent} from 'vue';
import axios from 'axios';


export default defineComponent({
  name: 'DatabaseView',
  components: {  },
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      axios.get('http://45.81.234.92/get.php')
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },
});

</script>

<style>

</style>
