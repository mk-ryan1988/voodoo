<template>
  <div class="flex flex-row flex-wrap overflow-x-hidden overflow-y-auto w-screen h-screen">
    <VdooNavbar />
    <main class="flex-grow max-w-full mx-auto px-4 sm:px-6 md:max-w-3xl xl:max-w-4xl xl:px-0">
      <nuxt/>
    </main>
    <div class="flex justify-center items-center h-64 w-full bg-card">
      <div>
        {{footerMsg}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import VdooNavbar from '~/components/navigation/VdooNavbar.vue';

export default defineComponent({
  name: 'blog' as string,
  components: {
    VdooNavbar,
  },
  setup(props, context: any) {
    const footerMsg = 'Made with  💚 in Brighton • by Mark Ryan'
    return {
      footerMsg
    }
  }
});
</script>
