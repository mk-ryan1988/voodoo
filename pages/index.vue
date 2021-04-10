<template>
  <div>
    <section>
      <AboutSection />

      <TechSection />
    </section>

    <section>
      <div class="flex justify-between items-center md:justify-center">
        <h2 class="mb-6 text-lg md:text-xl">Code, ramblings and projects!</h2>
      </div>

      <BlogSection
        :articles="articles"
      />

      <VdooBlogCard
        label="Freelance"
        thumbnail="https://res.cloudinary.com/mkryan/image/upload/v1618096790/Voodoo/fresh-start_ds9dml.png"
      >
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
        </template>
      </VdooBlogCard>
    </section>

    <VdooSocialbar />
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
    BlogSection,
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
      title: 'Hey Mark - About',
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

  header {
    @media (min-width: 1024px) {
        height: calc(100vh - 5rem);
        top: 2.5rem;
    }
  }
</style>
