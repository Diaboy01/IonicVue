<template>

  <div class="hello">
    <h1>{{ $t('welcome') }}</h1>
    <p v-html="$t('descr')"></p>
  </div>


  <ul class="list-rendering">
    <li v-for="character in daten" v-bind:key="character.id" class="class"
        @click="this.$router.push('/tabs/characters/'+character.id)">
      <img style="width:6%" :src="character.imageUrl" alt="character.fullName">
      <div class="text-cont">
        {{ character.fullName }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";


export default defineComponent({
  name: 'NewApiContainerMaster',
  components: {},
  setup() {
    const router = useRouter();
    return {router};
  },
  data() {
    axios.get('https://thronesapi.com/api/v2/Characters').then((response) => {
      //console.log(response.data);
      this.daten = response.data;
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

<style>
.class {
  width: 100%;
  float: left;
  display: block;
  height: 200px;
}

.class:hover {
  border: 0px solid #0F0;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;

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
