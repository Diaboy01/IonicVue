<template>

  <div id="container">
    <br>
    <br>
    <br>
    <button @click="count++">+ 1</button>
    <p>Anzahl: {{ count }}</p>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';

import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonItem, IonInput, IonLabel
} from '@ionic/vue';

export default defineComponent({
  name: 'CountButton',
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
