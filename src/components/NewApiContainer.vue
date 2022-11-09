<template>
  <ul class="list-rendering">
    <li v-for="character in daten" v-bind:key="character.id" class="class">
          <img style="width:8%" :src="character.imageUrl" alt="character.fullName"  @click="this.$router.push('/tabs/tab2?id='+character.id)">
        <div class="text-cont">
          <button @click="this.$router.push('/tabs/tab2?id='+character.id)">{{ character.fullName }}</button>
        </div>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";


export default defineComponent({
  name: 'NewApiContainer',
  components: {
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  data () {
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
  width:100%;
  float:left;
  display:block;
  height:200px;
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
