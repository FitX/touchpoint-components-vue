<template>
  <div
    class="rating">
    <p class="rating__description">Wie zufrieden bist du mit diesem Display?</p>
    <div
      v-if="components"
      :style="{ '--voting-icon-count' : numberOfVotings }"
      class="rating__buttons">

      <button
        v-for="icon in components"
        :key="icon.index"
        :class="[{ 'animation' : vote === icon.index }, `vote--${icon.index}`]"
        :disabled="isVoted"
        class="vote vote--up"
        @click="saveVote(icon.index)">
        <component
          :is="icon.component"
          class="rating__icon"
        ></component>

        <animation-satellite
          :animation="vote === icon.index"></animation-satellite>
      </button>

    </div>
  </div>
</template>

<script>
import AnimationSatellite from 'TPCpackages/AnimationSatellite/src/AnimationSatellite.vue';

export default {
  name: 'AppRating',
  components: {
    AnimationSatellite,
  },
  props: {
    name: {
      type: String,
      default: null,
    },
    isVoted: {
      type: Boolean,
      default: false,
    },
    numberOfVotings: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      vote: null,
      components: [],
    };
  },
  created() {
    for (let count = 0; count < this.numberOfVotings; count += 1) {
      console.log('count', count);
      // Runs 5 times, with values of step 0 through 4.
      this.components[count] = {
        index: (count + 1),
        component: () => import(`../../../assets/icon-vote-${(count + 1)}.svg`),
      };
    }
  },
  methods: {
    saveVote(count) {
      this.vote = count;
      this.$emit('success', this.vote);
    },
  },
};
</script>

<style lang="scss" scoped>
  // @use currently only with dart-sass
  // @use '~@/assets/styles/mixins.scss' as mixin;
  @import '../../../assets/styles/mixins.scss';
  // @import '~TPCstyles/mixins.scss';

  .rating {
    --voting-icon-count: 5;
    --voting-font-size: var(--font-size-normal, 30px);

    display: grid;
    align-items: center;
    font-size: var(--voting-font-size);

    @media (min-width: 600px) {
      grid-template-columns: auto minmax(max-content, 25.625rem);
      grid-template-columns: 1fr 25.625rem; // 410px
      grid-gap: 1em;
    }

    &__buttons {
      display: grid;
      grid-template-columns: repeat(var(--voting-icon-count), 1fr);
      justify-content: space-between;
    }

    &__icon {
      width: 3.625rem; // 50px
    }
  }

  .vote {
    @include btn-reset();

    --icon-size: 3.625rem; // 58px
    --vote-color: var(--color-white);

    position: relative;
    background: none;
    display: inline-block;
    outline: none;

    &.animation {
      --vote-color: var(--color-green);

      animation: icon-animation cubic-bezier(0.165, 0.840, 0.440, 1.000) 1.2s;
    }

    &--1.animation {
      --vote-color: var(--color-cherry);
    }

    &--2,
    &--3 {
      &.animation {
        --vote-color: var(--color-curry);
      }
    }
  }

  @keyframes icon-animation {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
