<template>
  <div
    class="vdoo-title w-full h-full shadow-2xl overflow-hidden lg:text-center lg:mx-0"
    :class="computedRadius"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VdooTitle',
  props: {
    origin: {
      type: String,
      required: false,
      validator: function (value) {
        return ['top', 'left', 'bottom', 'right', 'middle'].indexOf(value) !== -1
      }
    },
  },
  computed: {
    computedRadius() {
      switch (this.origin) {
        case 'top':
          return 'rounded-b-3xl rounded-b-3xl'
        case 'left':
          return 'rounded-r-3xl'
        case 'bottom':
          return 'rounded-t-3xl'
        case 'right':
          return 'rounded-l-3xl'
        case 'middle':
          return 'rounded-3xl'
          break;
        default:
          return 'rounded-b-3xl rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl'
      }
    }
  },
}
</script>

<style>
  .vdoo-title {
    /* maybe */
    background-image: linear-gradient(125deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);

    /* pinky */
    /* background-image: linear-gradient(43deg, #3323F4 0%, #C850C0 46%); */

    /* Stephs */
    /* background-image: linear-gradient(to right, #243949 0%, #517fa4 100%); */
  }
</style>
