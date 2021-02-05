<template>
  <div class="flex flex-col items-center overflow-x-hidden w-screen min-h-screen">
    <VdooNavbar />
    <main class="flex-grow w-full px-4 border-gray-200 border-b-2 sm:px-6 xl:max-w-4xl xl:px-0">
      <nuxt/>
    </main>

    <div class="space-y-8 divide-y divide-gray-500">

    </div>

    <div class="flex justify-center items-center h-32 md:h-64 w-full bg-">
      <div class="flex">
        Made with
        <VbaseIcon iconName="heart" class="mx-2" />
        in Brighton • by Mark Ryan
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
import VbaseIcon from '~/components/VbaseIcon.vue';

export default defineComponent({
  name: 'blog' as string,
  components: {
    VdooNavbar,
    VdooSocialbar,
    VbaseIcon
  }
});
</script>
