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
    <br>
  <div id="api"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';


export default defineComponent({
  name: 'OldApiContainer',
  components: {
  },
  data () {


    axios.get('https://thronesapi.com/api/v2/Characters').then((response) => {
          //console.log(response.data);
          const data = response.data;

          let url = new URL(location.href);
          let id = url.searchParams.get("id");

          let decimal = Number(id);
          console.log(data[decimal]);

          const selected = data[decimal];
          this.daten = data[decimal];

          const replacer = ["imageUrl"]
          let string = JSON.stringify(selected, replacer, " ");
          //console.log(string);

          const api = document.getElementById("api");
          const node = document.createElement("node");

          let splitted  = string.split("imageUrl", 2);

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

          var text = node.textContent
          //console.log(text);
          let nodeString = '<img style="width:20%" src="' + text + '" alt="Testbild">'
          api?.insertAdjacentHTML('beforeend', nodeString);
          return text; //FIXME Geht nicht
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
