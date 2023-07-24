// Composables

import { createRouter, createWebHistory } from 'vue-router'
import Dashbord from '@/views/Dashbord';
import Explore from '@/views/Explore';
import About from '@/views/About';
import Staff from '@/views/Staff';
import List_m6_66 from '@/components/Lists/List_m6_66';
import List_m5_66 from '@/components/Lists/List_m5_66';
import List_m4_66 from '@/components/Lists/List_m4_66';

const routes = [
  {
    path: '/',
    name: 'dashbord',
    component: Dashbord,
  },
  {
    path: '/explore',
    name: 'Explore',
    component:Explore
  },
  {
    path: '/staff',
    name: 'Staff',
    component:Staff
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/list_m6_66',
    name: 'list_m6_66',
    component: List_m6_66
  },
  {
    path: '/list_m5_66',
    name: 'list_m5_66',
    component: List_m5_66
  },
  {
    path: '/list_m4_66',
    name: 'list_m4_66',
    component: List_m4_66
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
