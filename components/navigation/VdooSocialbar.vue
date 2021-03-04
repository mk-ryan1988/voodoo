<template>
  <div
    id="socialBarContainer"
    :class="{'fixed bottom-0 z-30 my-3 px-4 rounded w-full lg:relative md:px-8 lg:pb-12' : !inline}"
  >
    <div ref="socialBar" :class="!inline ? 'py-4 glass' : 'py-2'" class="flex rounded w-full overflow-hidden md:ml-0 md:mb-0 shadow-2xl lg:transform-none md:shadow-none">
        <ul class="flex flex-grow items-center justify-evenly text-xs">
          <li
            v-if="$route.name !== 'index'"
            class="mx-4 nav-link"
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
                  <span class="mx-3 font-semibold hidden md:block">{{ $darkMode }}} Dark Mode</span>
              </a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script lang="ts">
import useTheme from '~/utilities/theme';
import VbaseIcon from '~/components/VbaseIcon.vue';
import VdooAvatar from '~/components/VdooAvatar.vue';
import { defineComponent, onMounted, computed, ref  } from '@vue/composition-api';

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

    const toggleTheme = () => {
      context.root.$darkMode = !context.root.$darkMode;
      let activeTheme = context.root.$darkMode ? 'dark' : 'light';
      toggleLocalTheme(activeTheme);
    };

    onMounted(() => {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let socialBarContainer =  document.getElementById('socialBarContainer');
        if (socialBarContainer) {
          if (prevScrollpos < currentScrollPos) {
            socialBarContainer.classList.add('translate-y-nav');
            } else {
              socialBarContainer.classList.remove('translate-y-nav');
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
  .translate-y-nav {
    transform: translateY(calc(100% + 0.75rem));
  }
</style>
