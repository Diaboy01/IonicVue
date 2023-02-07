<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>

      <div id="container">

        <DatabaseView name="DatabaseView"/>

      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MapView from "@/components/DatabaseView.vue";
import DatabaseView from "@/components/DatabaseView.vue";

export default defineComponent({
  name: 'Tab4Page',
  components: {DatabaseView}
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