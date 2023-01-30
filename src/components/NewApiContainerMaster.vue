<template>

  <div class="hello">
    <h1>{{ $t('welcome') }}</h1>
    <p v-html="$t('descr')"></p>
  </div>
  <ul class="list-rendering">

    <li v-for="(item,index) in items" v-bind:key="index" class="class"
        @click="this.$router.push('/tabs/article/'+article.entry_id)">
      <img style="width:10%" :src="item.image" alt="item.image">
      <div class="text-cont">
        {{ item.title }}
        <br>

      </div>
    </li>
  </ul>
</template>
//{{ article[0].associations[0].renditions[0].url }}
<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";
var apikey = 'd2a79ae546829bf9f16e81bd91a39197';
var category = 'technology';
var lang = 'de';
var url = 'https://gnews.io/api/v4/top-headlines?topic=' + category + '&token=' + apikey + '&lang=' + lang + '&country=de&max=10';
//url = 'https://gnews.io/api/v4/top-headlines?token=d2a79ae546829bf9f16e81bd91a39197&lang=de';

export default defineComponent({
  name: 'NewApiContainerMaster',
  components: {},
  setup() {
    const router = useRouter();
    return {router};
  },
  data() {
    return {
      items: [],
      itemCount: 5,
    }
  },
  computed: {
    limitedItems() {
      return this.items.slice(0, this.itemCount);
    }
  },
  mounted() {
      axios.defaults.baseURL = 'https://crossorigin.me/';
      //axios.get('https://digitalwires.dpa-newslab.com/R4M2wrF0jVhO4taWbTnTrszsI6jlrJpt/aufschaltung/au-clfMP2R2QiuFobx1NU/wireq/f-B7mt4LRofskkgXlK/entries.json').then((response) => {
      //axios.get('https://digitalwires.dpa-newslab.com/R4M2wrF0jVhO4taWbTnTrszsI6jlrJpt/aufschaltung/au-clfMP2R2QiuFobx1NU/feed/infoline-vor-24h.json').then((response) => {
      axios.get(url).then((response) => {
        this.items = response.data.articles;
        console.log(response.data);
        console.log(this.items);
        console.log(Object.values(this.items));
        console.log(Array.from(this.items));

      })
          .catch((error) => {
            console.error("FEHLER:", error);
          })
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
