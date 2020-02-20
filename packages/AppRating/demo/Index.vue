<template>
  <div class="detail">
    <h1>AppRating</h1>
    <p>Bewertung der Applikation.</p>
    <app-rating
      :isVoted="false"></app-rating>
  </div>
</template>

<script>
import AppRating from '../src/AppRating.vue';

export default {
  components: {
    AppRating,
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
