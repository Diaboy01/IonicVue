<template>

  <ion-menu content-id="main-content" side="end" class="menu">
    <ion-header>

      <ion-toolbar>
        <ion-title><ion-menu-toggle><ion-img style="height: 20%; width: 20%; display: block; margin: 0 auto;" src="https://assets.stickpng.com/images/588a64e0d06f6719692a2d10.png" alt=""></ion-img></ion-menu-toggle></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Menu content:
      <br>
      <br>
      {{ lang }} | {{ $t('changeLanguage') }}:
      <br>
      <ion-list>
        <ion-item>
          <ion-select
              interface="popover"
              @ionDismiss="changeLang($event);"
              @ionCancel="cancel();"
          >
            <ion-select-option value="de">Deutsch</ion-select-option>
            <ion-select-option value="en">English</ion-select-option>
            <ion-select-option value="nix">nix</ion-select-option>

          </ion-select>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
    </ion-header>
    <ion-content class="ion-padding">
      <br>
      <ion-menu-toggle>

        <ion-img class="menu-icon" src="https://assets.stickpng.com/images/588a64e0d06f6719692a2d10.png" alt=""></ion-img>

      </ion-menu-toggle>



      <ul class="list-rendering">
        <li v-for="(item, index) in items" v-bind:key="index" class="list"
            @click="this.$router.push('/pages/article/'+item.title)">
          <h2> {{ item.title }} </h2>
          <br>
          <br>
          <img style="width: 50%; height: 50%" :src="item.image" alt="item.image">
          <div class="text-cont">
            <h3> - {{ item.source.name }} </h3>
          </div>
        </li>
      </ul>


    </ion-content>

  </ion-page>


</template>




<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar} from '@ionic/vue';
import i18next from 'i18next';


const topic = 'breaking-news';
const lang = 'de';
const country = 'de';


//const max = 3;
const from = '2021-01-01';
const to = '2021-01-01';
const q = 'corona';
const In = 'title';

const apikey = 'd2a79ae546829bf9f16e81bd91a39197';

const url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey;

//  'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=' + lang + '&country=' + country + '&topic=' + topic + '&q='+q+'&sortby=publishedAt';
//  'https://gnews.io/api/v4/top-headlines?token=' + apikey + '&lang=' + lang + '&country=' + country + '&topic=' + topic + '&q='+q+'&max='+ max +'&sortby=publishedAt';
//  'https://gnews.io/api/v4/top-headlines?token=d2a79ae546829bf9f16e81bd91a39197&lang=de';


export default defineComponent({
  name: 'NewApiContainerMaster',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  created() {
    let params = new URLSearchParams('lang');
    let lang = params.get('lang');
    lang =  i18next.language;
    params.set('lang', lang);

    if (lang == null || lang == undefined) {

      var href = new URL('window.location.href');
      href.search = '';
      window.location.reload();
    }
    this.fetchData(url + '&lang=' + lang);
  },
  setup() {
    const router = useRouter();
    return {router};
  },
  data() {
    return {
      items: [],
      lang: i18next.language,
      url: url,
    }
  },
  methods: {
    changeLang(event: any) {
      let selectedLang = event.target.value;
      let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + selectedLang;
      window.history.pushState({path:newurl},'',newurl);
      //this.fetchData(url + '&lang=' + selectedLang);
      window.location.reload();
      return this.lang = selectedLang;
    },
    cancel(event: any) {
      window.location.reload();
    },
    async fetchData(url: string) {
      try {
        const response = await axios.get(url);
        this.items = response.data.articles;
      } catch (error) {
        console.error(error);
      }
    }
  },

});
</script>

<style>

.menu-icon {
  width: 10%;
  height: 10%;
  float: right;

}

.list {
  width: 100%;
  height: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: "Comic Sans MS", cursive, sans-serif;
  background-color: rgba(0, 0, 0, 0.2);
  display: block;
  align-items: center;
  align-content: center;
  text-align: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}


ion-page {
  background-color: transparent;
}

</style>
