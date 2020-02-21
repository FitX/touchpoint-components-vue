<template>
  <transition name="modal-fade">
    <div
      v-show="showOverlay"
      class="overlay">
      <div
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        class="overlay__inner">
        <h1
          class="overlay__headline"
          id="modalTitle">{{ headline }}</h1>
        <button
          @click="close"
          aria-label="Overlay schliessen">
          <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M46.429 0L25 21.43 3.571 0 0 3.57 21.429 25 0 46.43 3.571 50 25 28.57 46.429 50 50 46.43 28.571 25 50 3.57z"
              fill="#FFF"
              fill-rule="evenodd"/>
          </svg>
        </button>
        <div
          id="modalDescription"
          class="overlay__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'AppOverlay',
    props: {
      headline: {
        type: String,
        default: null,
      },
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        showOverlay: this.isVisible,
      };
    },
    created() {
    },
    methods: {
      close() {
        this.showOverlay = false;
        this.$emit('close');
      },
    },
    watch: {
      isVisible(isOpen) {
        if (isOpen) {
          document.body.classList.add('overlay-open');
        } else {
          document.body.classList.remove('overlay-open');
        }
        this.showOverlay = isOpen;
      },
    },
  };
</script>

<style lang="scss">
  .overlay {
    --overlay-color-text: var(--overlay-color-text, #fff);
    --overlay-headline-size: var(--overlay-headline-size, 4rem);
    --overlay-close-size: var(--overlay-close-size, 50px);
  }

  .overlay-open {
    overflow: hidden;
  }
</style>
<style scoped lang="scss">
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.9);
    z-index: 100;

    &__inner {
      width: 90vw;
      max-width: 1930px;
      display: grid;
      grid:
        'headline close' auto
        'content content' auto
        / 1fr auto;
    }

    &__content {
      grid-area: content;
    }
  }

  h1, button {
    grid-area: headline;
    font-size: var(--overlay-headline-size);
    font-weight: 400;
  }

  button {
    grid-area: close;
    background: none;
    border: 0;
    appearance: none;
    color: var(--overlay-color-text);
  }
</style>
