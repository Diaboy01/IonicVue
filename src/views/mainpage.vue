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


      <div class="embed-container">
        <iframe src="https://static.videezy.com/system/resources/previews/000/051/385/original/Dark_World_Map_Animate_Background.mp4" id="iframe" style="border: none;" frameborder="0" allowfullscreen scrolling="no" allow="autoplay" encrypted-media> </iframe>
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
.embed-container iframe {
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  background-color: black;
  z-index: -4;
}

</style>