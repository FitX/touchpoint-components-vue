<template>
  <div>
    <slot></slot>
    <hr>
    {{ textContent }}
  </div>
</template>

<script>
export default {
  name: 'ShowComponent',
  props: {
    componentUsage: String,
  },
  computed: {
    textContent() {
      console.log('slot', this.$slots.default[0]);
      return this.$slots.default[0];
    },
  },
};
</script>

<style scoped lang="scss">
</style>
