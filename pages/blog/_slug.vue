<template>
  <div class="flex flex-col m-auto">
      <header class="text-center py-20">
        <h1 class="stack text-4xl font-bold mb-2">
            {{ article.title }}
        </h1>
        <div>
          {{ article.date }}
          <span class="text-xs mx-1">•</span>
          {{ article.length }}
        </div>
      </header>

      <article class="min-w-full prose lg:prose-lg">
        <nuxt-content :document="article" />
      </article>

      <VdooBlogNav :prev="prev" :next="next" />
  </div>
</template>

<script>
import VdooBlogNav from '~/components/VdooBlogNav.vue';

export default {
    name: 'Blog',
    layout: 'blog',
    transition: {
      name: 'slide-fade',
      mode: 'out-in',
    },
    components: { VdooBlogNav },
    async asyncData ({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
    },
    head () {
      return {
        title: 'Voodoo - ' + this.article.title,
        meta: [
          { hid: 'blog', name: this.article.title, content: this.article.description }
        ]
      }
    },
}
</script>
<style lang="postcss">
  .nuxt-content {
    & p {
      @apply text-copy;
    }
    & pre {
      @apply rounded bg-card;
    }
    & img {
      @apply shadow-lg rounded;
    }
  }
  hr {
    @apply opacity-50 my-3;
  }
</style>
