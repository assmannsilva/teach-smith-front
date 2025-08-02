import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateOrganizationView from '@/views/CreateOrganizationView.vue'
import UserRegistrationView from '@/views/UserRegistrationView.vue'
import { useProfile } from '@/composables/useProfile'
import InviteStudentView from '@/views/invite/InviteStudentView.vue'
import InviteTeacherView from '@/views/invite/InviteTeacherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { public: true }
    },
    {
      path: '/create-organization',
      name: 'create-organization',
      component: CreateOrganizationView,
      meta: { public: true }
    },
    {
      path: '/register',
      name: 'register',
      component: UserRegistrationView,
      meta: { public: true }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/invite/students',
      name: 'invite-students',
      component: InviteStudentView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/invite/teachers',
      name: 'invite-teachers',
      component: InviteTeacherView,
      meta: {
        requiresAuth: true
      }
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const { getProfileData } = useProfile();
  const isAuthenticated = await getProfileData();

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'login', query: { redirect: to.fullPath }});
  }

  if (to.meta.public && isAuthenticated) {
    return next({ name: 'home' });
  }

  return next();
});


export default router
