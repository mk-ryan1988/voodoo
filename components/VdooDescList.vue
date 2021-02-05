<template>
  <dl>
    <div class="flex">
    <div class="flex-shrink-0">
      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        <slot name="icon" />
      </div>
    </div>
    <div class="ml-4">
      <dt class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        <slot name="title" />
      </dt>
      <dd class="mt-2 text-base">
        <slot name="description" />
      </dd>
    </div>
  </div>
</dl>
</template>

<script>
export default {
  name: 'VdooDescList',
}
</script>

<style>

</style>
