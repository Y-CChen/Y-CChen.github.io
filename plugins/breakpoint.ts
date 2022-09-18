import { Plugin } from '@nuxt/types';
import Vue from 'vue';
import tailwindConfig from '~/tailwind.config';

const pluginName = 'breakpoint';

interface PluginInterface {
  desktop: boolean;
}

interface PluginInstanceInterface {
  $breakpoint: PluginInterface;
}

declare module 'vue/types/vue' {
  interface Vue extends PluginInstanceInterface {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends PluginInstanceInterface {}
  interface Context extends PluginInstanceInterface {}
}

const plugin: Plugin = (_context, inject) => {
  if (!process.client) {
    return;
  }
  const makeBreakpoint = (value: string): number => {
    return parseInt(value.slice(0, value.indexOf('px')));
  };
  const isBreakpointValid = (breakpoint: number): boolean => {
    return window.innerWidth > breakpoint;
  };
  const breakpointDesktop = makeBreakpoint(
    (tailwindConfig.theme?.extend?.screens as any).desktop,
  );
  const plugin = Vue.observable({
    desktop: isBreakpointValid(breakpointDesktop),

    setDesktop(v: boolean) {
      this.desktop = v;
    },
  });
  window.addEventListener('resize', () => {
    plugin.setDesktop(isBreakpointValid(breakpointDesktop));
  });
  inject(pluginName, plugin as PluginInterface);
};

export default plugin;
