<template>
    <div>
        <div class="grid mb-12 stack">
            <div class="z-0 pattern-dots-md" />
            <h3 class="z-10 p-4 pl-16 text-6xl font-semibold">
            Hey 👋 I'm <br />
            Mark Ryan
            </h3>
        </div>

        <div class="w-full md:w-4/5 xl:w-8/12">
            <p class="mb-4">
            Welcome to my portfolio? Or is it a blog? Maybe a technical playground? Or it could be a diary, magical like Tom Riddle's but less horcrux-y!
            </p>
            <p>
            Anyway take a look around hopefully theres somethings you like and fell free to give me a follow.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import VdooSocialbar from '~/components/VdooSocialbar.vue'

export default defineComponent({
  name: 'IntroSection' as string,
//   props: {
//     iconName: {
//       type: String,
//       required: true
//     },
//     iconColor: {
//       type: String,
//       default: ''
//     }
//   },
//   setup(props) {
//     const iconRef = ref(null) as any;

//     onMounted(() => {
//       iconRef.value.firstChild.classList.add('stroke-current', 'fill-current');
//     })

//     return {
//       iconRef
//     };
//   },
});
</script>

<style>

</style>
