import { createRouter, createWebHistory } from 'vue-router'
// Pages import
import HomePage from '../views/HomePage.vue'
import SellPage from '../views/SellPage.vue'
import BuyPage from '../views/BuyPage.vue'
import RulesPage from '../views/RulesPage.vue'
import SearchPage from '../views/SearchPage.vue'
import InfoPage from '../views/InfoPage.vue'
import AuthPage from '../views/auth/AuthPage.vue'
import UserPage from '../views/user/UserPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/buy',
    component: BuyPage
  },
  {
    path: '/sell',
    component: SellPage
  },
  {
    path: '/rules',
    component: RulesPage
  },
  {
    path: '/search',
    component: SearchPage
  },
  {
    path: '/support',
    component: InfoPage
  },
  {
    path: '/auth',
    component: AuthPage
  },
  {
    path: '/user',
    component: UserPage
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
