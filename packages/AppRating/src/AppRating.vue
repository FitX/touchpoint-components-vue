<template>
  <div
    class="rating">
    <p
      v-if="description"
      class="rating__description">{{ description }}</p>
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
  import AnimationSatellite from '../../AnimationSatellite/src/AnimationSatellite.vue';

  /**
   * Filter Even Elements
   * normally even numbers have the feature that number % 2 === 0;
   * JavaScript is, however, zero-based, so want those elements with a modulo of 1:
   */
  const filterEvenElement = (array = []) => array.filter((item, index) => index % 2 === 0);

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
      description: {
        type: String,
        default: null,
      },
      numberOfVotings: {
        type: Number,
        default: 5,
        validator: value => {
          const acceptedValues = [2,3,5];
          return acceptedValues.includes(value);
        },
      },
    },
    data() {
      return {
        vote: null,
        components: [],
      };
    },
    created() {
      const components = [];
      for (let count = 0; count < 5; count += 1) {
        console.log('count', count);
        // Runs 5 times, with values of step 0 through 4.
        components[count] = {
          index: (count + 1),
          component: () => import(`../../../assets/icon-vote-${(count + 1)}.svg`),
        };
      }
      if (this.numberOfVotings === 5) {
        this.components = components;
      } else if (this.numberOfVotings === 3) {
        this.components = filterEvenElement(components);
      } else {
        const filtered = filterEvenElement(components);
        // For only 2 votings, filter and remove middle
        filtered.splice(1, 1);
        this.components = filtered;
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
    grid-gap: 1em;
    align-items: center;
    font-size: var(--voting-font-size);

    @media (min-width: 600px) {
      grid-template-columns: auto 1fr;
    }

    &__buttons {
      display: grid;
      grid-template-columns: repeat(var(--voting-icon-count), 3.625rem);
      grid-gap: 1em;
    }

    &__icon {
      // width: 3.625rem; // 50px
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
