<template>
  <div ref="socialBar" :class="!inline ? 'py-4 md:mt-12' : 'py-2'" class="flex rounded w-full overflow-hidden md:ml-0 md:mb-0 shadow-2xl md:shadow-none glass">
      <ul class="flex flex-grow items-center justify-evenly text-xs">
        <li
          class="mx-4 nav-link"
          v-if="$route.fullPath !== '/'"
        >
          <nuxt-link
            class="flex items-center"
            to="/"
          >
            <VbaseIcon iconName="home" />
            <div class="hidden md:block">
                <span class="mx-3 font-semibold">Home</span>
            </div>
          </nuxt-link>
          <a href="" rel="noopener" target="_blank" class="flex items-center">

          </a>
        </li>
        <li class="mx-4 nav-link">
            <a href="https://twitter.com/mkryan1988" rel="noopener" target="_blank" class="flex items-center">
                <VbaseIcon iconName="twitter" />
                <div class="hidden md:block">
                    <span class="mx-3 font-semibold">Twitter</span>
                </div>
            </a>
        </li>
        <li class="mx-4 nav-link">
            <a href="https://github.com/mk-ryan1988" rel="noopener" target="_blank" class="flex items-center"
            >
                <VbaseIcon iconName="git-hub" />
                <div class="hidden md:block">
                    <span class="mx-3 font-semibold">GitHub</span>
                </div>
            </a>
        </li>
        <li class="mx-4 nav-link">
            <a @click="toggleTheme" rel="noopener" class="flex items-center cursor-pointer"
            >
                <VbaseIcon iconName="sun" />
                <span class="mx-3 font-semibold hidden md:block">Dark Mode</span>
            </a>
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import useTheme from '~/utilities/theme.ts';
import VbaseIcon from '~/components/VbaseIcon.vue';
import VdooAvatar from '~/components/VdooAvatar.vue';
import { defineComponent, reactive, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'VdooSocialbar' as string,
  components: {
    VbaseIcon,
    VdooAvatar,
  },
  props: {
    inline: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, context: any) {
    const { setInitialTheme, toggleLocalTheme } = useTheme();

    const toggleTheme = (isDarkMode: boolean) => {
      context.root.$darkMode = !context.root.$darkMode;
      let activeTheme = context.root.$darkMode ? 'dark' : 'light';
      toggleLocalTheme(activeTheme);
    };

    const prevScrollpos = ref(0)

    onMounted(() => {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let socialBarContainer =  document.getElementById('socialBarContainer');
        if (socialBarContainer) {
          if (prevScrollpos < currentScrollPos) {
            socialBarContainer.classList.remove('my-3');
            socialBarContainer.classList.add('translate-y-full');
            } else {
            socialBarContainer.classList.add('my-3');
            socialBarContainer.classList.remove('translate-y-full');
          }
        }
        prevScrollpos = currentScrollPos;
      }
    })

    return {
      toggleTheme
    }
  }
});
</script>

<style lang="postcss" scoped>
  .nav-link {
    @apply text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white;
  }
</style>
