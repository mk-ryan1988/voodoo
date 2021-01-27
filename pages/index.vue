<template>
  <div class="flex flex-col m-auto relative lg:flex-row lg:h-screen lg:overflow-auto">
    <header class="flex items-center mx-3 lg:fixed lg:left-0 lg:mx-0 lg:w-5/12">
      <VdooTitle>
        <IntroSection />
      </VdooTitle>
    </header>

    <main class="lg:absolute lg:right-0 lg:w-7/12 lg:pl-24 lg:pr-32 mt-10">
      <section>
        <AboutSection/>
        <TechSection/>
      </section>

      <section>
        <div class="flex justify-between items-center">
          <h2 class="mb-4 text-lg md:text-xl">Code and ramblings!</h2>
        </div>
          <nuxt-link
            v-for="post in articles"
            :key="post.slug"
            :to="'/blog/' + post.slug"
          >
            <VdooCard
              flat
              grow
              class="mb-3"
            >
              <template slot="heading">{{post.title}}</template>
              <template slot="content">
                <p>
                  {{post.description}}
                </p>
              </template>
            </VdooCard>
          </nuxt-link>
      </section>

      <section>
        <h2 class="mb-4 text-lg md:text-xl">What have I built?</h2>
        <VdooCard
          thumb="https://leaner-living.com/images/LEANER-LIVING-LOGO.png"
          flat
          class="mb-2"
        >
          <template slot="heading">Fresh Start <span class="text-base font-md">with</span> Leaner-Living</template>
          <template slot="content">
            <p>
              A Progressive Web App built with a Vue.js frontend and Google's Firebase API.
              <br />
              This product aids personal trianers programming and managing one-2-one and online clients.
            </p>
          </template>
          <template slot="footer">
            <div><span>#vue.js</span> <span>#firebase</span></div>
            <a href="https://leaner-living.com/fresh-start/about" rel="noopener" target="_blank">
              <VbaseIcon iconName="external-link" />
              <span class="sr-only">View external link</span>
            </a>
          </template>
        </VdooCard>
      </section>
      <div id="socialBarContainer" class="fixed bottom-0 z-30 my-3 px-2 rounded w-full transform transition ease-out duration-100 md:relative md:px-8 md:pb-12">
        <VdooSocialbar id="socialbar-mobile" />
      </div>
    </main>
  </div>
</template>

<script>
import VbaseIcon from '~/components/VbaseIcon.vue';
import VdooAvatar from '~/components/VdooAvatar.vue';
import VdooCard from '~/components/card/VdooCard.vue';
import IntroSection from '~/components/_partials/IntroSection.vue';
import VdooSocialbar from '~/components/navigation/VdooSocialbar.vue';
import VdooTitle from '~/components/card/VdooTitle.vue';
import VdooDescList from '~/components/VdooDescList';
import TechSection from '~/components/_partials/TechSection.vue';
import AboutSection from '~/components/_partials/AboutSection.vue';

export default {
  name: 'IndexView',
  layout: 'home',
  components: {
    VdooCard,
    VbaseIcon,
    VdooAvatar,
    IntroSection,
    VdooSocialbar,
    VdooTitle,
    VdooDescList,
    TechSection,
    AboutSection
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'description'])
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
