<template>
  <div class="flex flex-col items-center m-auto relative lg:flex-row lg:items-start lg:h-screen lg:overflow-auto">
    <header
      class="flex items-center w-full px-6 md:w-auto md:px-0 md:mx-6 lg:fixed lg:left-0 lg:w-5/12 lg:my-auto lg:mx-0 lg:transform lg:-translate-y-1/2 lg:top-1/2"
    >
      <VdooTitle>
        <IntroSection />
      </VdooTitle>
    </header>

    <main class="lg:absolute lg:right-0 lg:w-7/12 xl:pl-24 xl:pr-32 mt-10">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import useTheme from '~/utilities/theme';
import VdooTitle from '~/components/card/VdooTitle.vue';
import IntroSection from '~/components/_partials/IntroSection.vue';
import { defineComponent, reactive, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'home' as string,
  components: {
    VdooTitle,
    IntroSection
  },
  setup(props) {
    const { setInitialTheme } = useTheme();
    setInitialTheme();
    return {
    }
  }
});
</script>
