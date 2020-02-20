<template>
  <div class="detail">
    <h1>AnimationSatellite</h1>
    <p>User Feedback in Form einer Animation. Momentan genutzt für Umfrage-Buttons.</p>
    <button @click="animate = !animate">
      Toggle Animation <animation-satellite :animation="animate"></animation-satellite>
    </button>
  </div>
</template>

<script>
import AnimationSatellite from '../src/AnimationSatellite.vue';

export default {
  components: {
    AnimationSatellite,
  },
  data() {
    return {
      animate: false,
    };
  },
};
</script>

<style>
  button {
    position: relative;
  }
</style>
