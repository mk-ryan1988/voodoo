<template>
<div ref="socialBar" class="flex p-1 rounded w-full overflow-hidden md:ml-0 md:mb-0 md:mt-12">
    <VdooAvatar class="md:mr-4" cover rounded />
    <ul class="flex flex-grow items-center justify-evenly text-xs md:justify-start">
    <li class="mx-4">
        <a href="https://twitter.com/mkryan1988" rel="noopener" target="_blank" class="flex items-center">
            <VbaseIcon iconName="twitter" />
            <div class="hidden md:block">
                <span class="mx-3 font-semibold">Twitter</span>
            </div>
        </a>
    </li>
    <li class="mx-4">
        <a href="https://github.com/mk-ryan1988" rel="noopener" target="_blank" class="flex items-center"
        >
            <VbaseIcon iconName="git-hub" />
            <div class="hidden md:block">
                <span class="mx-3 font-semibold">GitHub</span>
            </div>
        </a>
    </li>
    <li class="mx-4">
       <!-- <VdooSelect /> -->
        <a @click="clickSun" rel="noopener" class="flex items-center cursor-pointer"
        >
            <VbaseIcon iconName="sun" />
            <span class="mx-3 font-semibold hidden md:block">Dark Mode</span>
        </a>
    </li>
    </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from '@vue/composition-api'
import VbaseIcon from '~/components/VbaseIcon.vue'
import VdooAvatar from '~/components/VdooAvatar.vue'
import VdooSelect from '~/components/form/VdooSelect.vue'

export default defineComponent({
  name: 'VdooSocialbar' as string,
  components: {
    VbaseIcon,
    VdooAvatar,
    VdooSelect
  },
  setup(props, { emit }) {
    function clickSun() {
      emit('toggleDark');
    }

    const prevScrollpos = ref(0)

    onMounted(() => {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let socialBarContainer =  document.getElementById('socialBarContainer');
        if (socialBarContainer) {
          if (prevScrollpos < currentScrollPos) {
            socialBarContainer.classList.remove('mb-3');
            socialBarContainer.classList.add('translate-y-full');
            } else {
            socialBarContainer.classList.add('mb-3');
            socialBarContainer.classList.remove('translate-y-full');
          }
        }
        prevScrollpos = currentScrollPos;
      }
    })

    return {
      clickSun
    }
  }
});
</script>
<style lang="postcss" scoped>
#socialBarContainer {
  transiton: all ease-in-out 700ms;
}
#socialbar-mobile {
  @apply bg-gray-900;

  @screen md {
    @apply bg-gray-700;
  }

  @media (prefers-color-scheme: light) {
    @apply bg-white shadow;

    @screen md {
      @apply bg-gray-100 shadow-none;
    }
  }
}

body.light {
  & #socialbar-mobile {
    @apply bg-white shadow;

    @screen md {
      @apply bg-gray-100 shadow-none;
    }
  }
}
</style>
