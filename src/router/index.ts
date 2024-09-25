import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

router.beforeEach(async (to, from) => {
  const getUserRole = () => {
    return localStorage.getItem('roles'); 
  };

  if (to.path.startsWith('/middleware/admin') && getUserRole() !== 'admin') {
    return { path: '/WeekFour/DayFour/ExerciseTwo' }; 
  } else if (to.path.startsWith('/middleware/premiumUser') && getUserRole() !== 'premium_user') {
    return { path: '/WeekFour/DayFour/ExerciseTwo' }; 
  } else if (to.path.startsWith('/middleware/regularUser') && getUserRole() !== 'normal_user') {
    return { path: '/WeekFour/DayFour/ExerciseTwo' }; 
  }
});

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
