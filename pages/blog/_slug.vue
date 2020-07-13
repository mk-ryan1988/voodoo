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

      <div class="flex justify-between my-6">
         <nuxt-link to="/" class="inline-flex">
          <VbaseIcon iconName="arrow-left" />
          <h3 class="ml-2 font-semibold">go home</h3>
         </nuxt-link>

         <nuxt-link to="/" class="inline-flex">
          <h3 class="mr-2 font-semibold">This is another blog post</h3>
          <VbaseIcon iconName="arrow-right" />
         </nuxt-link>
      </div>
  </div>
</template>

<script>
import VbaseIcon from '~/components/VbaseIcon.vue';

export default {
    name: 'Blog',
    layout: 'blog',
    transition: {
      name: 'slide-fade',
      mode: 'out-in',
    },
    components: { VbaseIcon },
    async asyncData ({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
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
