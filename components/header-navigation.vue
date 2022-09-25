<template>
  <nav class="block" aria-labelledby="header-navigation">
    <h2 id="header-navigation" class="sr-only">header navigation</h2>
    <ul
      :class="[
        'flex items-center text-sm gap-2',
        vertical ? 'flex-col py-2' : '',
      ]"
    >
      <li
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        :class="[vertical ? 'w-full' : '']"
        @click="$emit('click', $event)"
      >
        <nuxt-link
          class="text-primary transition hover:text-primary/75"
          :to="item.to"
        >
          <div class="text-center p-2">
            {{ item.text }}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    items: {
      type: [Array],
      default() {
        return [];
      },
    } as PropOptions<
      {
        text: string;
        to: string;
      }[]
    >,
    vertical: {
      type: [Boolean],
      default: false,
    } as PropOptions<boolean>,
  },
});
</script>
