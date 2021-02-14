<template>
  <VbaseCard flat :class="thumbnail ? 'md:grid md:grid-rows-3 md:grid-cols-3 md:grid-flow-col' : 'flex flex-col'" class="gap-4">
    <div
      v-if="thumbnail"
      class="row-span-3 overflow-hidden max-w-full rounded-md aspect-w-16 aspect-h-9 mb-4 md:m-0 md:w-64"
    >
      <div
        :style="{ backgroundImage: `url('${thumbnail}` }"
        class=" bg-cover"
      />
    </div>
    <div class="col-span-2">
      <VdooSubtitle>
        {{ label }}
      </VdooSubtitle>
      <div class="text-lg leading-6 font-medium mt-1 text-gray-900 dark:text-white">
        <slot name="heading" />
      </div>
    </div>
    <div :class="thumbnail ? 'row-span-2' : ''" class="col-span-2">
      <div :class="{ 'truncate-3' : truncate }" class="overflow-ellipsis overflow-hidden text-base">
        <slot name="content" />
      </div>

      <div class="flex justify-between pt-4 text-base font-medium">
        <slot name="footer" />
      </div>
    </div>
  </VbaseCard>
</template>

<script>
import VbaseCard from './VbaseCard.vue';
import VdooSubtitle from '~/components/VdooSubtitle.vue';

export default {
  name: 'VdooBlogCard',
  components: {
    VbaseCard,
    VdooSubtitle
  },
  props: {
    label: {
      type: String,
      required: false,
      defalut: ''
    },
    thumbnail: {
      type: String,
      required: false,
    },
    truncate: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
  .truncate-3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
