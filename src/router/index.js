import { createRouter, createWebHistory } from 'vue-router'
// Pages import
import HomePage from '../layouts/HomePage.vue'
import SellPage from '../layouts/SellPage.vue'
import BuyPage from '../layouts/BuyPage.vue'
import RulesPage from '../layouts/RulesPage.vue'
import SearchPage from '../layouts/SearchPage.vue'
import InfoPage from '../layouts/InfoPage.vue'
import AuthPage from '../layouts/auth/AuthPage.vue'
import UserPage from '../layouts/user/UserPage.vue'

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
    }
    return { top: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
