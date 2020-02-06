import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Preference from '@/views/Preference.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/preference',
      name: 'preference',
      component: Preference,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
