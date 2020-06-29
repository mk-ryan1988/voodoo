<template>
  <div class="flex flex-col m-auto">
    <div class="flex flex-col mb-4 lg:min-h-screen">
      <VdooPolaroid
        class="z-20"
        transform="left"
        img="https://images.unsplash.com/photo-1591881289894-84b06f017edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1550&h=1550&q=80"
      />
      <VdooPolaroid
        class="-mt-40 mr-24 self-end z-10"
        transform="right"
        img="https://images.unsplash.com/photo-1591881289894-84b06f017edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1550&h=1550&q=80"
      />
    </div>
      <section class="mb-16">
        <h2 class="mb-4 text-2xl">What do I like to use?</h2>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); grid-gap: 0.5rem;">
          <a v-for="item in specialities" :key="item.title" :href="item.url" target="_blank" :class="{'cursor-default' : !item.url.length}">
            <VbaseCard :title="item.title">
                <div class="tech">
                    <VdooAvatar :bgImg="item.logo" :round="item.avatarRound" rounded class="mr-4" />
                    <span :style="{ color: item.color }">
                        {{ item.title }}
                    </span>
                </div>
            </VbaseCard>
          </a>
        </div>
      </section>
      <section class="mb-0">
        <h6 class="mb-4 text-2xl">What have I built?</h6>
        <VdooCard thumb="https://leaner-living.com/images/LEANER-LIVING-LOGO.png" class="mb-2">
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
            <a href="https://leaner-living.com/fresh-start/about" target="_blank">
              <VbaseIcon iconName="external-link" />
            </a>
          </template>
        </VdooCard>
      </section>
      <!-- <VbaseCard color="bg-indigo-700" class="w-full h-64" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { technologies } from '@/utilities/technologies'
import VbaseCard from '~/components/card/VbaseCard.vue'
import VbaseIcon from '~/components/VbaseIcon.vue'
import VdooCard from '~/components/card/VdooCard.vue'
import VdooAvatar from '~/components/VdooAvatar.vue'
import VdooPolaroid from '~/components/card/VdooPolaroid.vue';

export default defineComponent({
  layout: 'landing' as string,
  transition: {
    name: 'slide-fade',
    mode: 'out-in',
  },
  components: {
    VbaseCard,
    VbaseIcon,
    VdooCard,
    VdooAvatar,
    VdooPolaroid
  },

  setup() {
    const specialities = technologies
    return { specialities }
  },
})
</script>

<style lang="postcss">
section {
  @apply mb-12;
}
.tech {
    @apply flex flex-row items-center p-8 text-lg font-bold text-center uppercase;
}
.grid .tech {
  filter: grayscale(100%);
}
.grid a {
  &:hover .tech {
    filter: none;
  }
}
</style>
