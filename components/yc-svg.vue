<template>
  <div
    :class="[color]"
    :style="{
      '-webkit-mask': computedSrc,
      mask: computedSrc,
      height: computedHeight,
    }"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    src: {
      type: [String],
      default: undefined,
    } as PropOptions<string>,
    color: {
      type: [String],
      default: undefined,
      validator(v) {
        return !!(v as string)?.startsWith?.('bg-');
      },
    } as PropOptions<string>,
    height: {
      type: [Number, String],
      default: '100%',
    } as PropOptions<number | string>,
  },
  computed: {
    computedSrc: {
      get(): string {
        return `url(${this.src}) no-repeat center`;
      },
    },
    computedHeight: {
      get(): string {
        const height = `${this.height}`;
        return height === `${parseInt(height)}` ? `${height}px` : height;
      },
    },
  },
});
</script>
