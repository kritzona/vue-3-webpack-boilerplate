import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/pages/HomePage.vue';

const homePageRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: HomePage,
};

export default homePageRoute;
