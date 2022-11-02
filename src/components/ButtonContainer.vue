<template>


    <ion-button color="success" size="large" rel="noopener noreferrer" href="/tabs/tab2">Knopf</ion-button>


  <button @click="count++">+ 1</button>
  <p>Anzahl: {{ count }}</p>

  <ion-item>
    <ion-label position="floating">Schreibe eine Zahl hier:</ion-label>
    <ion-input type="number" placeholder="0"></ion-input>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton,IonItem,IonInput,IonLabel } from '@ionic/vue';

export default defineComponent({
  name: 'ButtonContainer',
  components: {
    //IonContent,
    //IonHeader,
    //IonPage,
    //IonTitle,
    //IonToolbar,
    //IonButton,
    //IonItem,
    //IonInput,
    //IonLabel
  },
  data() {
    return {
      count: 0
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
