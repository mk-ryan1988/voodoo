<template>
    <nav class="fixed inset-x-0 bottom-0 flex justify-center w-full h-16 px-4 md:absolute md:top-0 align-between">
        <ul class="flex items-center px-4 bg-white rounded-full shadow-lg md:rounded-full md:shadow-none">
          <li
            v-for="(item, index) in items"
            :key="'nav-link-' + index"
            class="px-4"
          >
            <nuxt-link class="pb-1 rounded-l rounded-r" :to="item.link">
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'VdooNavbar' as string,
  props: {
      items: {
      type: Array,
      required: false
    },
  }
});
</script>

<style scoped>
.nuxt-link-active.nuxt-link-exact-active {
  @apply border-b-4 border-gray-800;
}
</style>
