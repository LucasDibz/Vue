import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails.vue'
      ),
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ '../views/ExperienceDetails.vue'
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: 'notFound' });
      }
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "User" */ '../views/User.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(
        /* webpackChunkName: "Login" */
        '../views/Login.vue'
      ),
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () =>
      import(/* webpackChunkName: "Invoices" */ '../views/Invoices.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'vue-school-active-class',
  scrollBehavior(to: Route, from: Route, savedPosition: any) {
    if (savedPosition) return savedPosition;
    else {
      const position = {} as any;
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === '#experience') {
          position.offset = { y: 140 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: 'login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
