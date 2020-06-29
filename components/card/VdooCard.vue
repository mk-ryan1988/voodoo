<template>
  <VbaseCard class="px-6 py-4" :flat="flat">
    <div class="flex items-start">
      <div class="pr-5">
        <VdooCardHeading>
          <slot name="heading" />
        </VdooCardHeading>
        <slot name="content" />
      </div>
      <VdooAvatar v-if="hasImg" :bgImg="thumb" class="w-56"/>
    </div>
    <div class="flex justify-between mt-4">
      <slot name="footer" />
    </div>
  </VbaseCard>
</template>

<script lang="ts">
import VbaseCard from './VbaseCard.vue'
import VdooCardHeading from './VdooCardHeading.vue'
import VdooAvatar from '~/components/VdooAvatar.vue'
import { defineComponent, computed, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'VdooCard' as string,
  components: {
    VbaseCard,
    VdooAvatar,
    VdooCardHeading,
  },
  props: {
    thumb: {
      type: String,
      required: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
  },

  setup({ thumb }) {
    const hasImg = computed((): boolean => {
      if (thumb !== undefined) {
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
