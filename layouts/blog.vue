<template>
  <div class="flex flex-col items-center overflow-x-hidden w-screen min-h-screen">
    <VdooNavbar />
    <main class="flex-grow w-full px-6 sm:px-6 xl:max-w-4xl xl:px-0">
      <nuxt/>
    </main>

    <hr />

    <div class="flex justify-center items-center mx-4 h-32 md:h-64 w-full">
      <div class="flex">
        Made with
        <VbaseIcon iconName="heart" class="mx-2" />
        in Brighton • by Mark Ryan
      </div>
    </div>

    <VdooSocialbar
      class="fixed md:hidden"
    />
  </div>
</template>

<script lang="ts">
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
