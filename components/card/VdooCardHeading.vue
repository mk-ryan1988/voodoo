<template>
    <p class="mb-4 text-2xl font-semibold">
        <slot></slot>
    </p>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'VdooCardHeading' as string,
});
</script>

<style>

</style>
