<template>

  <br>
  <br>
  <br>
  <button @click="submitForm">Click me</button>
  <br>
  <br>
    <button @click="count++"> {{ count }}</button>
</template>

<script>
import {defineComponent} from 'vue';
import axios from 'axios';
//import Database from "@/assets/js/database.js";

export default defineComponent({
  name: 'DatabaseView',
  components: {  },
data() {
  return {
    count: 0,
    formData: {
      name: '',
      email: '',
      message: ''
    },
  }
},
  methods: {
    submitForm() {
      axios.post('https://your-database-api.com/data', this.formData)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
});

</script>

<style>
.map {
  width:40%;
  height:40%;
  z-index: 1;
  cursor: pointer;
  z-index: 10;
}

</style>
