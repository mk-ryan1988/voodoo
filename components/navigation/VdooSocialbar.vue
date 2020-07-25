<template>
<div ref="socialBar" :class="{ 'px-2 py-1 md:mt-12': !inline }" class="flex rounded w-full overflow-hidden md:ml-0 md:mb-0 ">
    <div v-if="!inline" class="rounded-full text-3xl md:text-5xl md:mr-4">
      🧙‍♂️
    </div>
    <ul class="flex flex-grow items-center justify-evenly text-xs md:justify-start">
    <li class="mx-4 text-content hover:text-heading">
        <a href="https://twitter.com/mkryan1988" rel="noopener" target="_blank" class="flex items-center">
            <VbaseIcon iconName="twitter" />
            <div class="hidden md:block">
                <span class="mx-3 font-semibold">Twitter</span>
            </div>
        </a>
    </li>
    <li class="mx-4 text-content hover:text-heading">
        <a href="https://github.com/mk-ryan1988" rel="noopener" target="_blank" class="flex items-center"
        >
            <VbaseIcon iconName="git-hub" />
            <div class="hidden md:block">
                <span class="mx-3 font-semibold">GitHub</span>
            </div>
        </a>
    </li>
    <li class="mx-4 text-content hover:text-heading">
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
