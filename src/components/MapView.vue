<template>

  <div class="mapouter"><div class="gmap_canvas">

    <iframe width="600" height="500" id="gmap_canvas"
            src="https://maps.google.com/maps?q=Berlin%20Zoo&t=k&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
    </iframe>
  </div></div>

  <br>
    <button @click="count++"> {{ count }}</button>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'MapView',
  components: {  },
  data() {
    return {
      count: 0
    }
  }
});
</script>

<style>
.gmap_canvas {
  overflow: hidden;
  background: none!important;
  height: 500px;
  width: 600px;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.iframe {
  width:100%;
  height:100%;
}

</style>
