<template>
  <div class="flex flex-row flex-wrap overflow-x-hidden overflow-y-auto w-screen h-screen">
    <nav class="h-16 w-full"></nav>
    <main class="flex-grow max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-4xl xl:px-0">
      <nuxt/>
    </main>
    <div class="h-64 w-full bg-card">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'blog' as string,
  components: {
  },
  setup(props, context: any) {
    return {
    }
  }
});
</script>
