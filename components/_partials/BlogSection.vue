<template>
  <div>
    <VdooBlogCard
      v-for="post in articles"
      :key="post.slug"
      class="mb-3"
      label="blog"
      truncate
    >
      <template slot="image">
        <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="">
      </template>
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
