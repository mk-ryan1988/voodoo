<template>
  <div>
    <VdooBlogCard
      v-for="post in articles"
      :key="post.slug"
      class="mb-6"
      :label="post.label"
      truncate
      :thumbnail="post.thumbnail"
    >
      <template slot="heading">
        {{post.title}}
      </template>

      <template slot="content">
        <p>
          {{post.description}}
        </p>
      </template>

      <template slot="footer">
        <div>
          <span
            v-for="tag in post.tags"
            :key="tag"
          >
            #{{ tag }}
          </span>
        </div>

        <nuxt-link
          :to="'/blog/' + post.slug"
        >
          Read more
        </nuxt-link>
      </template>
    </VdooBlogCard>
  </div>
</template>

<script>
import VdooBlogCard from '~/components/card/VdooBlogCard.vue';

export default {
  name: 'BlogSection',
  components: {
    VdooBlogCard
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>

</style>
