<template>
  <div class="flex flex-col items-center overflow-x-hidden w-screen min-h-screen">
    <VdooNavbar />
    <main class="flex-grow w-full px-4 sm:px-6 md:max-w-3xl xl:max-w-4xl xl:px-0">
      <nuxt/>
    </main>
    <div class="flex justify-center items-center h-32 md:h-64 w-full bg-">
      <div>
        {{footerMsg}}
      </div>
    </div>
    <div id="socialBarContainer" class="fixed bottom-0 z-30 my-3 px-2 rounded w-full transform transition ease-out duration-100 md:hidden">
      <VdooSocialbar id="socialbar-mobile" class="bg-white dark:bg-black shadow-2xl" />
    </div>
  </div>
</template>

<script lang="ts">
import useTheme from '~/utilities/theme.ts';
import { defineComponent } from '@vue/composition-api';
import VdooNavbar from '~/components/navigation/VdooNavbar.vue';
import VdooSocialbar from '~/components/navigation/VdooSocialbar.vue';

export default defineComponent({
  name: 'blog' as string,
  components: {
    VdooNavbar,
    VdooSocialbar
  },
  setup(props) {
    const { setInitialTheme } = useTheme();

    setInitialTheme();

    const footerMsg = 'Made with  💚 in Brighton • by Mark Ryan'
    return {
      footerMsg
    }
  }
});
</script>
