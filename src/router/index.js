import Vue from 'vue'
import Router from 'vue-router'
import ExpandedGame from '../components/ExpandedGame'
import AllGames from '../components/AllGames'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AllGames
    },
    {
      path: '/game/:id',
      name: 'ExpandedGame',
      component: ExpandedGame
    }
  ]
})