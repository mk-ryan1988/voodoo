<template>
    <div class="min-w-screen min-h-screen">
        <nuxt />
        <!-- <div id="socialBarContainer" class="fixed bottom-0 z-30 my-3 px-2 rounded w-full transform transition ease-out duration-100 md:hidden">
          <VdooSocialbar id="socialbar-desktop" class="bg-card shadow-2xl" />
        </div> -->
    </div>
</template>

<script lang="ts">
import useTheme from '~/utilities/theme.ts';
import IntroSection from '~/components/section/IntroSection.vue';
import VdooSocialbar from '~/components/navigation/VdooSocialbar.vue';
import { defineComponent, reactive, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'home' as string,
  components: {
    IntroSection,
    VdooSocialbar,
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
