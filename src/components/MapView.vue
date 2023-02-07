<template>

  <br>
  <br>
  <br>
  <br>

    <iframe class="map"
            src="https://maps.google.com/maps?q=Berlin&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
    </iframe>


  <br>
    <button @click="count++"> {{ count }}</button>
</template>

<script>
import {defineComponent} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'MapView',
  components: {  },
data() {
  axios.get('https://geolocation-db.com/json/', {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      host: '104.236.174.88',
      port: 3128
    }
  }).then((response) => {
    this.items = response.data;
    console.log(response.data);
  })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("FEHLER:", error);
      })
  return {
    items: [],
    count: 0,
    search: '',
  }
},
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
