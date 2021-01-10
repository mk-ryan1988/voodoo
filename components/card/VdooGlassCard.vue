<template>
  <VbaseGlass class="px-6 py-4">
    <div class="flex flex-col items-start">
      <div class="flex items-center justify-between w-full mb-4">
        <VdooCardHeading>
          <slot name="heading" />
        </VdooCardHeading>
      </div>
      <slot name="content" />
    </div>
  </VbaseGlass>
</template>

<script>
import VbaseGlass from '../glass/VbaseGlass.vue'
import VdooCardHeading from './VdooCardHeading.vue';

export default {
  components: {
    VbaseGlass,
    VdooCardHeading,
  },

}
</script>

<style>

</style>
