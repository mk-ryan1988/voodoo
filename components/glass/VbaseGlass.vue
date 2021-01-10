<template>
  <div class="glass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VbaseGlass'
}
</script>

<style lang="postcss">
  .glass {
    @apply rounded-md bg-gradient-to-br from-white to-transparent bg-opacity-50 blur-xl;
  }
</style>
