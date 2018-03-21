import Vue from 'vue'
import MainPage from '@/components/MainPage'

describe('MainPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main h1').textContent)
      .toEqual('Hello from Vue.js')
  })
})
