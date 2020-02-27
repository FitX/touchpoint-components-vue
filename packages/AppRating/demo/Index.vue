<template>
  <div class="detail">
    <h1>AppRating</h1>
    <p>Bewertung der Applikation.</p>
    <app-rating
      :isVoted="false"></app-rating>

    <prism language="html">
      <p>Lorem</p>
    </prism>

    <pre v-text="`<app-rating
      :isVoted='false'></app-rating>`"></pre>
  </div>
</template>

<script>
// import 'prismjs';
// import 'prismjs/themes/prism.css';
import Prism from 'vue-prism-component';
import AppRating from '../src/AppRating.vue';

export default {
  components: {
    AppRating,
    Prism,
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
