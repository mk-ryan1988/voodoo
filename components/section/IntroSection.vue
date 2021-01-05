<template>
    <div class="relative z-0 px-24">
        <div class="grid mb-12 stack">
            <!-- pattern-dots-md -->
            <h3 class="py-4 text-4xl font-xbold md:text-6xl md:font-semibold text-left">
            Hey 👋 I'm <br />
            Mark Ryan.
            </h3>
        </div>

        <div class="w-full text-white text-left mb-8 md:mb-0">
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
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'IntroSection' as string,
});
</script>

