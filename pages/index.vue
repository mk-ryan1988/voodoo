<template>
  <div>
    <section>
      <AboutSection />

      <TechSection />
    </section>

    <section>
      <div class="flex justify-between items-center">
        <h2 class="mb-4 text-lg md:text-xl">Code and ramblings!</h2>
      </div>

      <BlogSection
        :articles="articles"
      />
    </section>

    <section>
      <h2 class="mb-4 text-lg md:text-xl">What have I built?</h2>

      <VdooBlogCard
        label="Freelance"
        class="mb-3"
      >
        <template slot="image">
          <img
          :src="require(`~/assets/projects/fresh-start.png`)" alt="">
        </template>

        <template slot="heading">
          Fresh Start <span class="text-base font-md">with</span> Leaner-Living
        </template>
        <template slot="content">
          <p>
            A Progressive Web App built with a Vue.js frontend and Google's Firebase API.
            <br />
            This product aids personal trianers programming and managing one-2-one and online clients.
          </p>
        </template>

        <template slot="footer">
          <div>
            <span>#vue.js</span> <span>#firebase</span>
          </div>

          <!-- <nuxt-link
            :to="'/blog/' + post.slug"
          >
            Read more
          </nuxt-link> -->
        </template>
      </VdooBlogCard>
    </section>
    <div id="socialBarContainer" class="fixed bottom-0 z-30 my-3 px-2 rounded w-full transform transition ease-out duration-100 md:relative md:px-8 md:pb-12">
      <VdooSocialbar id="socialbar-mobile" />
    </div>
  </div>
</template>

<script>
import VbaseIcon from '~/components/VbaseIcon.vue';
import VdooAvatar from '~/components/VdooAvatar.vue';
import VdooCard from '~/components/card/VdooCard.vue';
import VdooBlogCard from '~/components/card/VdooBlogCard.vue';
import VdooSocialbar from '~/components/navigation/VdooSocialbar.vue';
import TechSection from '~/components/_partials/TechSection.vue';
import AboutSection from '~/components/_partials/AboutSection.vue';
import BlogSection from '~/components/_partials/BlogSection.vue';

export default {
  name: 'IndexView',
  layout: 'home',
  components: {
    VdooCard,
    VdooBlogCard,
    VbaseIcon,
    VdooAvatar,
    VdooSocialbar,
    TechSection,
    AboutSection,
    BlogSection
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'description', 'thumbnail', 'tags'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      articles
    }
  },
  head () {
    return {
      title: 'Voodoo - Mark Ryan',
      meta: [
        { hid: 'about_me', name: 'about_me', content: 'Voodoo developer. A Short synopsis of me as a developer and a person.' }
      ]
    }
  },
};
</script>

<style lang="postcss" scoped>
  section {
    @apply mb-16 px-8
  }

  .diagonal::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: skewY(3deg);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background-color: var(--body);
  }
  header {
    @media (min-width: 1024px) {
        height: calc(100vh - 5rem);
        top: 2.5rem;
    }
  }
</style>
