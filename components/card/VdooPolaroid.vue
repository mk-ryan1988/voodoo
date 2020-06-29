<template>
  <VbaseCard class="w-1/2 p-6 pb-20 rounded-sm shadow-xl polaroid" :class="transform" :flat="flat">
    <img :src="img" alt="">
  </VbaseCard>
</template>

<script lang="ts">
import VbaseCard from './VbaseCard.vue'
import { defineComponent, computed, ref } from '@vue/composition-api'

interface polaroidProps {
  img: string
  flat: boolean
  transform: string
};

export default defineComponent({
  name: 'VdooPolaroid' as string,
  components: {
    VbaseCard,
  },
  props: {
    img: {
      type: String,
      required: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    transform: {
      type: String,
      required: false,
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
  },

  setup(props: polaroidProps) {
    const hasImg = computed((): boolean => {
      if (props.img !== undefined) {
        return true
      }
      return false
    })

    return {
      hasImg,
    }
  },
})
</script>
<style lang="postcss">
  .polaroid {
    @apply bg-white;
  }
  .polaroid.left {
    transform: rotate(-12deg);
  }

  .polaroid.right {
    transform: rotate(30deg);
  }
</style>
