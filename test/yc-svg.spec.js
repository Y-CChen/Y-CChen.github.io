import { mount } from '@vue/test-utils';
import YcSvg from '~/components/yc-svg.vue';

describe('YcSvg', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(YcSvg);
    expect(wrapper.vm).toBeTruthy();
  });
});
