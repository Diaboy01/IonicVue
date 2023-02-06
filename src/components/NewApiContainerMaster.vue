<template>





  <ion-menu content-id="main-content" side="end" class="menu">




    <ion-header>
      <ion-toolbar>
        <ion-title><ion-menu-toggle><ion-img style="height: 20%; width: 20%; display: block; margin: 0 auto;" src="https://assets.stickpng.com/images/588a64e0d06f6719692a2d10.png" alt="" @click="window.location.reload();" ></ion-img></ion-menu-toggle></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>{{ $t('settings') }}</h1>

      <!--ion-list change topic-->

      <ion-list>
        <ion-item>
          <ion-content class="ion-padding">{{ $t('changeTopic') }}</ion-content>
          <ion-select
              @ionCancel="cancel();"

              @ionDismiss="changeTopic($event);"
              @ionSelect="changeTopic($event);"
              @ionSelectOption="changeTopic($event);"
              @ionChange="changeTopic($event);"

              interface="popover"

          >
            <ion-select-option value="breaking-news">Breaking News</ion-select-option>
            <ion-select-option value="business">Business</ion-select-option>
            <ion-select-option value="entertainment">Entertainment</ion-select-option>
            <ion-select-option value="general">General</ion-select-option>
            <ion-select-option value="health">Health</ion-select-option>
            <ion-select-option value="science">Science</ion-select-option>
            <ion-select-option value="sports">Sports</ion-select-option>
            <ion-select-option value="technology">Technology</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <!--ion-list change language-->


      <ion-list>
        <ion-item>
           <ion-content class="ion-padding">{{ $t('changeLanguage') }}</ion-content>
          <ion-select
              @ionCancel="changeLang($event);"

              @ionDismiss="changeLang($event);"
              @ionSelect="changeLang($event);"
              @ionSelectOption="changeLang($event);"
              @ionChange="changeLang($event);"


              interface="popover"

          >
            <ion-select-option value="de">German</ion-select-option>
            <ion-select-option value="en">English</ion-select-option>
            <ion-select-option value="ar">Arabic</ion-select-option>
            <ion-select-option value="zh">Chinese</ion-select-option>
            <ion-select-option value="es">Spanish</ion-select-option>
            <ion-select-option value="fr">French</ion-select-option>
            <ion-select-option value="it">Italian</ion-select-option>
            <ion-select-option value="ja">Japanese</ion-select-option>
            <ion-select-option value="ko">Korean</ion-select-option>
            <ion-select-option value="nl">Dutch</ion-select-option>
            <ion-select-option value="pt">Portuguese</ion-select-option>
            <ion-select-option value="ru">Russian</ion-select-option>
            <ion-select-option value="tr">Turkish</ion-select-option>
            <ion-select-option value="hi">Hindi</ion-select-option>




          </ion-select>

        </ion-item>
      </ion-list>


      <!--ion-list change Country-->

      <ion-list>
        <ion-item>
          <ion-content class="ion-padding">{{ $t('changeCountry') }}</ion-content>
          <ion-select
              @ionCancel="cancel();"
              @ionDismiss="changeCountry($event);"
              @ionSelect="changeCountry($event);"
              @ionSelectOption="changeCountry($event);"
              @ionChange="changeCountry($event);"
              interface="popover"
          >
            <ion-select-option value="de">Germany</ion-select-option>
            <ion-select-option value="us">United States</ion-select-option>
            <ion-select-option value="at">Austria</ion-select-option>
            <ion-select-option value="be">Belgium</ion-select-option>
            <ion-select-option value="ca">Canada</ion-select-option>
            <ion-select-option value="ch">Switzerland</ion-select-option>
            <ion-select-option value="cn">China</ion-select-option>
            <ion-select-option value="fr">France</ion-select-option>
            <ion-select-option value="gb">Great Britain</ion-select-option>
            <ion-select-option value="it">Italy</ion-select-option>
            <ion-select-option value="jp">Japan</ion-select-option>
            <ion-select-option value="ru">Russia</ion-select-option>
            <ion-select-option value="es">Spain</ion-select-option>
            <ion-select-option value="tr">Turkey</ion-select-option>
            <ion-select-option value="ae">United Arab Emirates</ion-select-option>
            <ion-select-option value="za">South Africa</ion-select-option>

          </ion-select>
        </ion-item>
      </ion-list>


      <img v-if="dataReady" style="width: 15%; height: 3%" :src="imageSrc" alt="countrys.name">

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


      <div v-if="items">
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
      </div>
      <ion-infinite-scroll>
        <ion-infinite-scroll-content
            loading-spinner="bubbles"
        ></ion-infinite-scroll-content>
      </ion-infinite-scroll>




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
import {reactive} from "vue";


//const max = 3;
const from = '2021-01-01';
const to = '2021-01-01';
const q = 'corona';

const apikey = '81efca0bfe5c715e11e6a8ff0bdf7978';

const url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey;



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
    this.articleData(url + '&lang=' + lang);


    this.countryData(lang);
  },
  setup() {
    const router = useRouter();
    return { router};
  },
  data() {
    return {
      countrys: [],
      lang: i18next.language,
      country: '',
      topic: 'breaking-news',
      url: url,
      dataReady: false,
      imageSrc: '',
      items: []
    }
  },
  methods: {
    changeTopic(event: any) {
      let selectedTopic = event.target.value;
      this.articleData(url + '&topic=' + selectedTopic);
      return this.topic = selectedTopic;
    },
    changeLang(event: any) {
      let selectedLang = event.target.value;
      let href = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + selectedLang;
      window.history.pushState({path:href},'',href);
      this.articleData(url + '&lang=' + selectedLang);
      return this.lang = selectedLang;
    },
    changeCountry(event: any) {
      let selectedCountry = event.target.value;
      this.articleData(url + '&country=' + selectedCountry);
      return this.country = selectedCountry;
    },
    async articleData(url: string) {
      try {
        const response = await axios.get(url);
        this.items = response.data.articles;
      } catch (error) {
        console.error(error);
      }
    },
    async countryData(countryApi: string) {
      try {
        const response = await axios.get("https://restcountries.com/v2/alpha/" + countryApi);
        console.log(response.data);
        //this.countrys = response.data;
        this.dataReady = true;
        this.imageSrc =  response.data.flags.png;
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
