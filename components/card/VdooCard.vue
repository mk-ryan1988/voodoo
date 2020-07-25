<template>
  <VbaseCard class="px-6 py-4" :flat="flat">
    <div class="flex flex-col items-start">
         <div class="flex items-center justify-between w-full mb-4">
          <VdooCardHeading>
            <slot name="heading" />
          </VdooCardHeading>
          <VbaseIcon v-if="icon" :icon-name="icon" />
          <VdooAvatar v-if="hasImg" :bgImg="thumb" class="w-24 lg:w-56"/>
        </div>
        <slot name="content" />
    </div>
    <div class="flex justify-between mt-4">
      <slot name="footer" />
    </div>
  </VbaseCard>
</template>

<script lang="ts">
import VbaseCard from './VbaseCard.vue';
import VbaseIcon  from './../VbaseIcon.vue';
import VdooCardHeading from './VdooCardHeading.vue';
import VdooAvatar from '~/components/VdooAvatar.vue';
import { defineComponent, computed, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'VdooCard' as string,
  components: {
    VbaseCard,
    VbaseIcon,
    VdooAvatar,
    VdooCardHeading,
  },
  props: {
    icon : {
      type: String,
      required: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    thumb: {
      type: String,
      required: false,
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
