<template>

  <ion-page>
    <ion-header>

    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">

      </ion-header>

      <div id="container">

        <NewApiContainerMaster name="NewApiContainerMaster"/>

      </div>

    </ion-content>
  </ion-page>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import NewApiContainerMaster from '@/components/NewApiContainerMaster.vue';
import MainMenu from '@/components/MainMenu.vue';

export default defineComponent({
  name: 'Tab1Page',
  components: {NewApiContainerMaster}
});

</script>

<style>
div {

}
#container {

}


</style>