import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import homePageRoute from '@/routes/home-page-route';

const routes: RouteRecordRaw[] = [homePageRoute];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
