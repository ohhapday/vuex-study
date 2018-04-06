import Vue from 'vue';
import VueRouter from 'vue-router';

import Test from '../components/Test';
import NotFound from '../pages/General/NotFound';

const routes = [
  {
    path: '/',
    component: Test
  },
  /*
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  authPages,
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        components: {default: Dashboard, header: DashboardHeader}
      },
      {
        path: 'calendar',
        name: 'Calendar',
        components: {default: Calendar, header: CalendarHeader}
      },
      {
        path: 'charts',
        name: 'Charts',
        components: {default: Charts, header: DefaultHeader}
      },
      {
        path: 'widgets',
        name: 'Widgets',
        components: {default: Widgets, header: DefaultHeader}
      }
    ]
  },
  */
  {path: '*', component: NotFound}
];

Vue.use(VueRouter);

export default new VueRouter({
  routes,
  linkActiveClass: 'active'
});
