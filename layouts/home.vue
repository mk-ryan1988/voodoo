<template>
  <div class="flex flex-col m-auto relative lg:flex-row lg:h-screen lg:overflow-auto">
    <header class="flex items-center mx-3 lg:py-12 lg:fixed lg:h-full lg:left-0 lg:top-0 lg:mx-0 lg:w-5/12">
      <VdooTitle>
        <IntroSection />
      </VdooTitle>
    </header>

    <main class="lg:absolute lg:right-0 lg:w-7/12 lg:pl-24 lg:pr-32 mt-10">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import useTheme from '~/utilities/theme.ts';
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

<style lang="postcss">
.pattern-dots-md {
    @apply overflow-visible text-indigo-700 p-10;
    max-width: 50% !important;
    background-image: radial-gradient(currentColor 1px, transparent 1px);
    background-size: calc(10 * 1px) calc(10 * 1px);

    @screen md {
      max-width: 20% !important;
    }
}

.grid.stack > * {
    grid-column: 1;
    grid-row: 1;
}
</style>
