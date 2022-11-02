<template>
  <div id="container">
    <div id="api"></div>
    <ul>
      <li v-for="character in daten" v-bind:key="character.id">
        <CharacterView :character="character"/>

      </li>
    </ul>
    {{ text }} <!-- FIXME Geht nicht -->
    {{ toll }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import CharacterView from "@/components/CharacterView.vue";


export default defineComponent({
  name: 'ApiContainer',
  components: {
    CharacterView
  },

  data () {
    axios.get('https://thronesapi.com/api/v2/Characters').then((response) => {
          //console.log(response.data);
          const data = response.data;
          this.daten = response.data;
          //console.log(data['3']);
          const selected = data['3']; //TODO Wählbare ID

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
          let nodeString = '<img src="' + text + '" alt="Testbild">'
          api?.insertAdjacentHTML('beforeend', nodeString);
          return text; //FIXME Geht nicht
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("FEHLER:", error);
        })

return {
  daten: [], //FIXME Geht nicht
  toll: "Tolles Bild",
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
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
