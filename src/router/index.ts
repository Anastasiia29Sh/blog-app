import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'front page',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/user/:id',
    name: 'user',
    meta: {
      title: 'front page',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/user.vue'),
  },
  {
    path: '/post/:id',
    name: 'post',
    meta: {
      title: 'front page',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/post.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;