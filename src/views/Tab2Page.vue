<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

        <CountButton name="CountButton" />
        <OldApiContainer name="OldApiContainer" />

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import OldApiContainer from '@/components/OldApiContainer.vue';
import CountButton from "@/components/CountButton.vue";

export default defineComponent({
  name: 'Tab2Page',
  components: {CountButton, OldApiContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
