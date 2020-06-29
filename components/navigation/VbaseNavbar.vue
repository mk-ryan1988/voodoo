<template>
    <nav class="flex justify-between w-full h-16 px-4 align-between">
        <ul class="flex items-center">
          <li
            v-for="(item, index) in links"
            :key="'nav-link-' + index"
            class="px-4"
          >
            <nuxt-link class="pb-1 rounded-l rounded-r" :to="item.link">
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
</template>

<script>
export default {
    
    props: {
        items: {
            type: Array,
            required: false
        },
    },
}
</script>

<style>

</style>
