<template>

  <ul class="list-rendering">

    <li v-for="(item, index) in items" v-bind:key="index" class="list"
        @click="this.$router.push('/pages/')">
      <img style="width:10%" :src="item.image" alt="item.image">
      <div class="text-cont">
        {{ item.title }}
        <br>
        <br>
        {{ item.content }}

      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';

var apikey = '862f5bbbf184b4f24aab9ce6de861153';
var topic = 'breaking-news';
var lang = 'de';
var country = 'de';
//var max = 3;
var from = '2021-01-01';
var to = '2021-01-01';
var q = 'corona';
var In = 'title';
var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=' + lang + '&country=' + country + '&topic=' + topic + '&q='+q+'&sortby=publishedAt';
//var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=' + lang + '&country=' + country + '&topic=' + topic + '&q='+q+'&max='+ max +'&sortby=publishedAt';
//url = 'https://gnews.io/api/v4/top-headlines?token=d2a79ae546829bf9f16e81bd91a39197&lang=de';


export default defineComponent({
  name: 'NewApiContainerDetail',
  components: {},

  data() {
    let title = JSON.stringify(this.$route.params.title);
    let cleanTitle = title.replaceAll('"', '')
    axios.get('https://gnews.io/api/v4/top-headlines?token=' + apikey + '&in=title&q="' + cleanTitle +'"').then((response) => {
      this.items = response.data.articles;
    })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("FEHLER:", error);
        })
    return {
      items: [],
    }
  },
});
</script>

<style>

.list {
  display: block;
}


#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
}


</style>
