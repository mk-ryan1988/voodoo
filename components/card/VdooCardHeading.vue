<template>
    <p class="text-1xl font-bold lg:text-2xl lg:font-semibold">
        <slot></slot>
    </p>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VdooCardHeading' as string,
});
</script>

<style>

</style>
