<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <header
      class="sticky top-0 z-50 bg-white inset-x-0 border-b-2 border-gray-100"
    >
      <div
        class="capitalize flex items-center max-w-screen-xl h-16 px-4 mx-auto gap-8 desktop:h-24 desktop:px-8"
      >
        <nuxt-link class="block text-primary" to="/">
          <span class="sr-only">home</span>
          <yc-svg
            class="w-12 h-12 desktop:w-16 desktop:h-16"
            src="/logo.svg"
            color="bg-primary"
          />
        </nuxt-link>
        <header-navigation v-if="$breakpoint.desktop" :items="navItems" />
        <button
          v-else
          class="block ml-auto p-2.5 text-primary transition hover:text-primary/75 bg-gray-100 rounded"
          @click.stop="mobileNavVisible = !mobileNavVisible"
        >
          <span class="sr-only">toggle menu</span>
          <svg
            v-if="mobileNavVisible"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 fill-transparent stroke-current stroke-2"
            viewBox="0 0 50 50"
          >
            <path
              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 fill-transparent stroke-current stroke-2"
            viewBox="0 0 50 50"
          >
            <path
              d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
            />
          </svg>
        </button>
      </div>
      <header-navigation
        v-show="!$breakpoint.desktop && mobileNavVisible"
        :items="navItems"
        vertical
        @click.stop="mobileNavVisible = false"
      />
    </header>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return { mobileNavVisible: false };
  },
  computed: {
    navItems: {
      get(): { text: string; to: string }[] {
        return [
          { text: 'profile', to: '/profile' },
          { text: 'essays', to: '/essays' },
        ];
      },
    },
  },
});
</script>
