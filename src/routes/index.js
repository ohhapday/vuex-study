import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../pages';
import Index2 from '../pages/Index2';
import NotFound from '../pages/General/NotFound';

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Index
  }, {
    path: '/test',
    name: 'Sub',
    component: Index2,
    children: [
      {
        path: '/regular',
        name: 'Regular',
        component: {
          Index
        }
      }
    ]
  }, {
    path: '*', component:
    NotFound
  }
];

Vue.use(VueRouter);

export default new VueRouter({
  routes,
  linkActiveClass: 'active'
});
