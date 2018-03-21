import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'

Vue.use(Router)

const User = {
  template: '<div>User info, id: {{ $route.params.id }}</div>'
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/users/:id',
      component: User
    }
  ]
})
