<template>
  <div @keydown.esc="open = false" tabindex="0" class="relative inline-block text-left">
    <div>
      <div @click="open = !open" class="cursor-pointer">
        <slot :open="open" name="title"/>
      </div>
    </div>
    <transition :name="transition">
      <div v-show="open" class="origin-top-right absolute z-10 right-0 mt-2 w-64 rounded-md shadow-lg">
        <div class="rounded-md bg-white shadow-lg p-4">
          <slot name="body" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VdooDropdown',
  props: {
    transition: {
      type: String,
      default: 'grow'
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.close)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close)
  }
}
</script>

<style scoped lang="postcss">
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.grow-enter-active {
  animation: grow-in .25s;
}
.grow-leave-active {
  animation: grow-in .25s reverse;
}
@keyframes grow-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
