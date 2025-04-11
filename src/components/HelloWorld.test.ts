import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hola mundo' } })
    expect(wrapper.text()).toContain('Hola mundo')
  })
})
