<template>
  <div id="container">
    <br>
    <div id="api"></div>
    <br>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'OldApiContainer',
  components: {},

  data() {
    axios.get('https://thronesapi.com/api/v2/Characters').then((response) => {
      //console.log(response.data);
      let id = Number(this.$route.params.id);
      //console.log(response.data[id]);
      this.daten = response.data[id];

      let string = JSON.stringify(response.data[id], ["imageUrl"], " ");
      //console.log(string);

      let api = document.getElementById("api");
      let node = document.createElement("node");

      let splitted = string.split("imageUrl", 2);

      node.textContent = splitted.toString()
          .replaceAll(",", "")
          .replaceAll('"', '')
          .replaceAll('[', '')
          .replaceAll('}', '')
          .replaceAll(']', '')
          .replaceAll('{', '')
          .replaceAll(': ', '')
          .replaceAll('None', ' ')
          .replaceAll('imageUrl', '')
      ;

      let text = node.textContent;
      //console.log(text);
      let nodeString = '<img style="width:20%" src="' + text + '" alt="Testbild"> '
      api?.insertAdjacentHTML('beforeend', nodeString);
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
