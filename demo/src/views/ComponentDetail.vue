<template>
  <div class="detail">
    <h1>component: {{ componentName }}</h1>
    <component :is="componentInstance"></component>
  </div>
</template>

<script>
export default {
  name: 'ComponentDetail',
  data() {
    return {
      componentName: this.$route.params.componentName,
    };
  },
  computed: {
    componentInstance() {
      const name = this.componentName;
      // return () => import('TPCpackages/AnimationSatellite/src/AnimationSatellite.vue');
      return () => import(`TPCpackages/${name}/demo/Index.vue`);
    },
  },
};
</script>
