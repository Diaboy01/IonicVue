<template>
    <ion-menu content-id="main-content" side="end" class="menu">
    <ion-header>
      <ion-toolbar>
        <ion-title><ion-menu-toggle><ion-icon :icon="settingsOutline" size="large" ></ion-icon></ion-menu-toggle></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>{{ $t('settings') }}</h1>
      <!--ion-list change topic-->
      <ion-list>
        <ion-item>
          <ion-content class="ion-padding">{{ $t('changeTopic') }}</ion-content>
          <ion-select
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
        <ion-icon :icon="settingsOutline" size="large" class="menu-icon"  ></ion-icon>

      </ion-menu-toggle>

      <div v-if="items">
      <ul class="list-rendering">
        <li v-for="(item, index) in items" v-bind:key="index" class="list"
            @click="this.$router.push('/pages/article/'+item.title)">
          <h1> {{ item.title }} </h1>
          <img style="width: 80%; height: 80%" :src="item.image" alt="item.image">
          <div class="text-cont">
            <h5> - {{ item.source.name }} </h5>
            <br>
            <br>
          </div>
        </li>
      </ul>
      </div>

    </ion-content>
  </ion-page>
</template>



<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";
import { IonIcon } from '@ionic/vue';
import { settingsOutline } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonMenu,
  IonToolbar} from '@ionic/vue';
import i18next from 'i18next';


const from = '2021-01-01';
const to = '2021-01-01';
const q = 'corona';

const apikey = '862f5bbbf184b4f24aab9ce6de861153';

const url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + "&max=10";


export default defineComponent({
  name: 'NewApiContainerMaster',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonMenu,
    IonIcon
  },
  created() {
    let params = new URLSearchParams(window.location.search);
    let lang = params.get('lang');
    if (!lang) {
      lang = i18next.language;
      params.set('lang', lang);
    }

    let country = params.get('country');
    if (country) {
      params.set('country', country);
    }

    let topic = params.get('topic');
    if (topic) {
      params.set('topic', topic);
    }

    let urlParams = new URLSearchParams(params).toString();
    this.articleData(`${url}&${urlParams}`);
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
      settingsOutline,
      items: [],
    }
  },
  methods: {
    changeTopic(event: any) {
      let selectedTopic = event.target.value;
      this.updateParams({ topic: selectedTopic });
    },
    changeLang(event: any) {
      i18next.changeLanguage(event.target.value);
      this.countryData(event.target.value);
      let selectedLang = event.target.value;
      this.updateParams({ lang: selectedLang });
    },
    changeCountry(event: any) {
      let selectedCountry = event.target.value;
      this.updateParams({ country: selectedCountry });
    },
    updateParams(newParams: any) {
      let href = window.location.href;
      let currentParams = new URL(href).searchParams;

      Object.keys(newParams).forEach(key => {
        currentParams.set(key, newParams[key]);
      });

      let updatedHref = href.split("?")[0] + "?" + currentParams.toString();
      window.history.pushState({ path: updatedHref }, "", updatedHref);

      this.articleData(url + "&" + currentParams.toString());
    },

    async articleData(link: string) {
      try {
        console.log(link);
        const response = await axios.get(link);
        this.items = response.data.articles;
        console.log(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    },
    async countryData(countryApi: string) {
      try {
        const response = await axios.get("https://restcountries.com/v2/alpha/" + countryApi);
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
  position: sticky;
}

.list {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: "Comic Sans MS", cursive, sans-serif;
  background-color: rgba(0, 0, 0, 0.2);
  display: block;
  align-items: center;
  align-content: center;
  text-align: center;
  cursor: pointer;
  z-index: 10;
  overflow-y: scroll;
}


ion-page {
  background-color: transparent;
}

</style>
