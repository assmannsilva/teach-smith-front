import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateOrganizationView from '@/views/CreateOrganizationView.vue'
import UserRegistrationView from '@/views/UserRegistrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/create-organization',
      name: 'create-organization',
      component: CreateOrganizationView,
    },
    {
      path: '/register',
      name: 'register',
      component: UserRegistrationView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
