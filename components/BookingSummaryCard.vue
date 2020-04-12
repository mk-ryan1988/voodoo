<template>
  <BaseCard>
    <template v-slot:title>
      <h1 class="text-gray-600">HTXA-2FVGEV56</h1>  
    </template>
    <template v-slot:content>
      <div class="flex">
        <div class="flex-1 h-32"></div>
        <div class="flex-1 h-32"></div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "~/components/BaseCard.vue";
export default {
  components: {
    BaseCard
  },
  data() {
    return {};
  },
  props: {
    booking: {
      type: Object,
      default: function() {
        return { message: "hello" };
      }
    }
  }
};
</script>

<style>
</style>