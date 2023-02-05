import { mount } from '@vue/test-utils'
import mainpage from '@/views/mainpage.vue'

describe('Tab1Page.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(mainpage)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
