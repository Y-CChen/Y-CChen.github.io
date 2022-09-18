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
        <nav
          v-if="$breakpoint.desktop"
          class="block"
          aria-labelledby="header-navigation"
        >
          <h2 id="header-navigation" class="sr-only">header navigation</h2>
          <ul class="flex items-center text-sm gap-6">
            <li v-for="(navItem, navItemIndex) in navItems" :key="navItemIndex">
              <nuxt-link
                class="text-gray-500 transition hover:text-gray-500/75"
                :to="navItem.to"
              >
                {{ navItem.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <button
          v-else
          class="block ml-auto p-2.5 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
        >
          <span class="sr-only">toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
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
