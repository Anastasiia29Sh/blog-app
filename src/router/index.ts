import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/blog-app/',
    name: 'home',
    meta: {
      title: 'front page',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/blog-app/user/:id',
    name: 'user',
    meta: {
      title: 'front page',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/user.vue'),
  },
  {
    path: '/blog-app/post/:id',
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