<template>
  <div class="rounded-sm overflow-hidden shadow mb-4 bg-white">
    <div v-if="hasImg" class="h-32 px-6 py-4 bg-gray-600">
    </div>
    <div class="px-6 py-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'BaseCard' as string,
  props: {
    img: {
      type: [Object, Boolean],
      required: true
    }
  },

  setup ({ img }) {
    const hasImg = computed((): boolean => {
      if (img !== undefined) {
        return true;
      } return false;
    })

    return {
      hasImg
    }
  }
});
</script>

<style>
</style>
