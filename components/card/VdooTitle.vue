<template>
  <div
    class="vdoo-title w-full h-full shadow-2xl overflow-hidden lg:text-center lg:mx-0 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 dark:from-green-400 dark:via-red-indigo dark:to-blue-500"
    :class="[
      computedRadius,
      computedBg
    ]"
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
    meshBg: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    computedBg() {
      return this.meshBg ? 'meshBg' : ''
    },
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
        default:
          return 'rounded-b-3xl rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl'
      }
    }
  },
}
</script>

<style scoped>
  .meshBg {
    background-image: url('https://res.cloudinary.com/mkryan/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1618095021/Voodoo/Royal-Heath-mesh_waxacm.jpg');
    background-size: cover;
    background-position: bottom;
  }
  .dark .meshBg {
    background-image: url('https://res.cloudinary.com/mkryan/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1618094504/Voodoo/Pale-Cornflower-Bluejpg_qeqtrt.jpg');
    background-size: cover;
    background-position: bottom;;
  }
</style>
