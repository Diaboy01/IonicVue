<template>

  <button @click='fetchData(url)'>STARTEN</button>
  <button @click='pushLog("lul")'>LEL</button>

  <ion-list>
    <ion-item>
      <ion-select
          placeholder="Select fruit"
          @ionDismiss="pushLog($event)"
          @ionCancel="fetchData(url + '&lang=' + currentFood)"
      >
        <ion-select-option value="de">Deutsch</ion-select-option>
        <ion-select-option value="en">English</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>

      </ion-select>
    </ion-item>
  </ion-list>

  Current value: {{ currentFood }}

  <div class="hello">
    <h1>{{ $t('welcome') }}</h1>
    <p v-html="$t('descr')"></p>
  </div>
  <br>

  <ul class="list-rendering">
    <li v-for="(item, index) in items" v-bind:key="index" class="list"
        @click="this.$router.push('/tabs/article/'+item.title)">
      <img style="width:10%" :src="item.image" alt="item.image">
      <div class="text-cont">
        {{ item.title }}
        <br>
      </div>
    </li>
  </ul>
  <br>


</template>
<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

var apikey = '8714ac4a0acc0130f2a1fc8aa008f407';
var topic = 'breaking-news';
var lang = 'de';
var country = 'de';
//var max = 3;
var from = '2021-01-01';
var to = '2021-01-01';
var q = 'corona';
var In = 'title';
var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey;
//var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=' + lang + '&country=' + country + '&topic=' + topic + '&q='+q+'&sortby=publishedAt';
//var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=' + lang + '&country=' + country + '&topic=' + topic + '&q='+q+'&max='+ max +'&sortby=publishedAt';
//url = 'https://gnews.io/api/v4/top-headlines?token=d2a79ae546829bf9f16e81bd91a39197&lang=de';
var Test = 'Test';


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
      currentFood: "test",
      url: url, //funktioniert nicht so wie man denkt
    }
  },
  methods: {
    pushLog(event: any) {
      let selectedValue = event.target.value;
      console.log(selectedValue);
      return this.currentFood = selectedValue;
    },
    async fetchData(url: string) {
      try {
        const response = await axios.get(url);
        this.items = response.data.articles;
        console.log(this.items);
      } catch (error) {
        console.error(error);
      }
    }
  },

});
</script>

<style>
.list {
  width: 100%;
  float: left;
  display: block;
  height: 200px;
}

.list:hover {
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
