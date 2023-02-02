<template>

  <div class="hello">
    <h1>{{ $t('welcome') }}</h1>
    <p v-html="$t('descr')"></p>
  </div>
  <ul class="list-rendering">

    <li v-for="(item, index) in items" v-bind:key="index" class="class"
        @click="this.$router.push('/tabs/article/'+item.title)">
      <img style="width:10%" :src="item.image" alt="item.image">
      <div class="text-cont">
        {{ item.title }}
        {{ additionalVariable }}
        <br>

      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";



var apikey = 'da6f8cbb4719063c2ffc6909fe212c21';
var topic = 'breaking-news';
var lang = 'de';
var country = 'de';
//var max = 3;
var from = '2021-01-01';
var to = '2021-01-01';
var q = 'corona';
var In = 'title';
var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=de';
//var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=' + lang + '&country=' + country + '&topic=' + topic + '&q='+q+'&sortby=publishedAt';
//var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=' + lang + '&country=' + country + '&topic=' + topic + '&q='+q+'&max='+ max +'&sortby=publishedAt';
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
      additionalVariable: lang
    }
  },
  mounted() {
      axios.defaults.baseURL = 'https://crossorigin.me/';
      axios.get(url).then((response) => {

        this.items = response.data.articles;

        console.log("Test");

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
