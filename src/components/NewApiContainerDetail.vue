<template>
  <div id="container">
    <br>
    <br>
    Name: {{ daten.fullName }}
    <br>
    Title: {{ daten.title }}
    <br>
    Family: {{ daten.family }}
    <br>
    <img style="width:20%"  :src="daten.imageUrl" alt="character.fullName">
    <br>
    <br>
    <div id="api"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'NewApiContainerDetail',
  components: {},

  data() {
    axios.get('https://thronesapi.com/api/v2/Characters').then((response) => {
      //console.log(response.data);
      console.log(response.data.entries[0].associations[0].renditions[0].url);
      let id = Number(this.$route.params.id);
      //console.log(response.data[id]);
      this.daten = response.data[id];
    })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("FEHLER:", error);
        })

    return {
      daten: [],
    }
  },


});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
}

#container strong {
  font-size: 20px;
}

#container p {
  font-size: 16px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
