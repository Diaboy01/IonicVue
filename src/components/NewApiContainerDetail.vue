<template>
  <img src="http://45.81.234.92/FlashNews24Logo.png" class="logo-icon">
  <ul class="list-rendering">
    <li v-for="(item, index) in items" v-bind:key="index" class="list">

  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ item.title }}</ion-card-title>
    </ion-card-header>
    <a :href="item.url" @click.prevent="openInNewTab(item.url)">
    <img alt="Silhouette of mountains" :src="item.image" style="width:50%; cursor: pointer;" />
      </a>
    <ion-card-header>
      <ion-card-title>{{ item.description }}</ion-card-title>
      <ion-card-subtitle>{{ item.publishedAt }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{ item.source.name }}
      <p><a :href="item.url">{{ item.content }}</a></p>
    </ion-card-content>
  </ion-card>
    </li>
  </ul>



</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

var apikey = '129948095df6e338818f923ddad0aeee';

var url = 'https://gnews.io/api/v4/top-headlines?token=' + apikey + "&max=1";


export default defineComponent({
  name: 'NewApiContainerDetail',
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },

  data() {
    let title = JSON.stringify(this.$route.params.title);
    let cleanTitle = title.replaceAll('"', '').replaceAll(':', '')
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
  methods: {
    openInNewTab(url: string) {
      window.open(url, "_blank");
    }
  },




});
</script>

<style>

.list {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: "montserrat", cursive, sans-serif;
  background-color: rgba(0, 0, 0, 0.2);
  display: block;
  align-items: center;
  align-content: center;
  text-align: center;
  z-index: 10;
  overflow-y: scroll;
}

ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
.logo-icon {
  width: min(35vw, 180px);
  height: auto;
  float: left;
  position: sticky;
}
</style>
