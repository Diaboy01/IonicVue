<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <BasicView name="Tab 3 page"/>

      <LoginView name = "LoginView"/>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import BasicView from '@/components/BasicView.vue';
import LoginView from "@/components/LoginView.vue";

export default defineComponent({
  name: 'Tab3Page',
  components: {LoginView, BasicView, IonHeader, IonToolbar, IonTitle, IonContent, IonPage}
});
</script>
