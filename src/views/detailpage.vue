<template>
  <ion-page>
    <ion-header>

    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">

      </ion-header>

      <div id="container">

        <NewApiContainerDetail name="NewApiContainerDetail"/>

      </div>

      <img src="http://45.81.234.92/worldnews.gif" id="background-container" alt="">

    </ion-content>
  </ion-page>
  <ion-footer>
    <ion-toolbar>
      <ion-title>@FLASHNEWS24</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import NewApiContainerDetail from '@/components/NewApiContainerDetail.vue';
import CountButton from "@/components/CountButton.vue";

export default defineComponent({
  name: 'Tab2Page',
  components: {NewApiContainerDetail}
});
</script>
<style>

#container {
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  align-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  position: absolute;
  z-index: -3;
  opacity: 0.75;
}
ion-page {
  background-color: transparent;
}
#background-container{
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  z-index: -4;

}

</style>