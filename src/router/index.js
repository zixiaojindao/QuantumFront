import Vue from 'vue';
import Router from 'vue-router';
import SiderBar from '@/components/SiderBar';
import Home from '@/components/Home';
import CompanyInfo from '@/components/Company_Info';
import CreditReport from '@/components/Credit_Report';

Vue.use(Router);
/* eslint-disable */ 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'SiderBar',
      component: SiderBar,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/companyInfo',
          name: 'CompanyInfo',
          component: CompanyInfo
        },
        {
          path: '/creditReport',
          name: 'CreditReport',
          component: CreditReport
        }
      ]
    }
  ]
})
