<template>
    <main class="w-full h-full">
      <div class="flex flex-col justify-between p-6 md:p-8 lg:fixed lg:h-screen lg:w-1/2 lg:pr-0 xl:py-20 xl:pl-40">
        <IntroSection />
        <VdooSocialbar id="socialbar-desktop" @toggleDark="toggleTheme" class="hidden md:flex" />
      </div>
      <div id="socialBarContainer" class="fixed bottom-0 z-30 mb-3 px-2 rounded w-full transform transition ease-out duration-100 md:hidden">
        <VdooSocialbar id="socialbar-mobile" @toggleDark="toggleTheme" class="bg-card shadow-md" />
      </div>
      <div class="p-6 md:p-8 lg:w-1/2 lg:pl-0 lg:absolute lg:top lg:right-0 xl:py-20 xl:pr-40">
        <nuxt />
      </div>
    </main>
</template>

<script lang="ts">
import useTheme from '~/utilities/theme.ts';
import IntroSection from '~/components/section/IntroSection.vue';
import VdooSocialbar from '~/components/navigation/VdooSocialbar.vue';
import { defineComponent, reactive, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'landing' as string,
  components: {
    IntroSection,
    VdooSocialbar,
  },
  setup(props, context: any) {
    const { setCssVariables, setInitialTheme } = useTheme();

    const toggleTheme = (isDarkMode: boolean) => {

      context.root.$darkMode = !context.root.$darkMode;
      let activeTheme = context.root.$darkMode ? 'dark' : 'light';
      localStorage.setItem('color_theme', activeTheme);
      setCssVariables(activeTheme);
    };

    setInitialTheme();

    return {
      toggleTheme,
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
