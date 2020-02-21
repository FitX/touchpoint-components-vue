<template>
  <div class="detail">
    <h1>AppOverlay</h1>
    <p>Overlay über der App das beliebigen Content anzeigt</p>
    <button @click="showOverlay = !showOverlay">Overlay Anzeigen</button>
    <app-overlay></app-overlay>
  </div>
</template>

<script>
import AppOverlay from '../src/AppOverlay.vue';

export default {
  components: {
    AppOverlay,
  },
  data() {
    return {
      showOverlay: false,
    };
  },
};
</script>

<style>
</style>
