<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ApiContainer name="ApiContainer" />

        <ButtonContainer name="ButtonContainer" />


      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ApiContainer from '@/components/ApiContainer.vue';
import ButtonContainer from '@/components/ButtonContainer.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: {ButtonContainer, ApiContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});

</script>
