<template>
  <div
    class="vdoo-title w-full h-full shadow-2xl lg:text-center lg:mx-0"
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
          return 'rounded-b-xl rounded-b-xl'
        case 'left':
          return 'rounded-r-xl'
        case 'bottom':
          return 'rounded-t-xl'
        case 'right':
          return 'rounded-l-xl'
        case 'middle':
          return 'rounded-xl'
          break;
        default:
          return 'rounded-b-xl rounded-b-xl lg:rounded-b-none lg:rounded-r-xl'
      }
    }
  },
}
</script>

<style>
  .vdoo-title {
    /* background-color: #4158D0;  */
    /* background-color: #3323F4; */
    /* background-image: linear-gradient(43deg, #3323F4 0%, #C850C0 46%); */
    background-image: url('~assets/big-sur.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
