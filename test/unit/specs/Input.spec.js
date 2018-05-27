import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input'

describe('Input.vue', () => {
  it('should render an input element', () => {
    const wrapper = shallowMount(Input)
    expect(wrapper.html()).toContain('<input>')
  })
})
