import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue';
import AboutView from '../views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import { useAuthStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore()
        authStore.logout()
        next({ name: 'login' })
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.checkAuthentication()

  console.log('checando auth: ', isAuthenticated)

  if (isAuthenticated) {
    next(to.name === 'login' ? { name: 'home' } : undefined);
  } else {
    next(to.name === 'login' ? undefined : { name: 'login' });
  }
});

export default router
