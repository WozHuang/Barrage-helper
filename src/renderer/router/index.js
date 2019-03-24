import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: require('@/views/index/Index').default,
    },
    {
      path: '/BarrageList',
      name: 'BarrageList',
      component: require('@/views/huya/BarrageList').default,
    },
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default,
    // },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
