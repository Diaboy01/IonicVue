<template>
  <img :src="character.imageUrl" :alt="character.imageUrl">
</template>
<script lang="ts">
export default {
  name: 'CharacterView',
  props: {
    character: {}
  }
}
</script>
<style scoped>

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