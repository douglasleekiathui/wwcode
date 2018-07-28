import Vue from 'vue'
import Router from 'vue-router'

import BasicLayout from '@/layouts/BasicLayout'
import CompanyLayout from '@/layouts/CompanyLayout'

import Login from '@/components/Login'
import Settings from '@/components/Settings'
import Construction from '@/components/Construction'
import Construction2 from '@/components/Construction2'
import Construction3 from '@/components/Construction3'

import Jobs from '@/components/jobs/Index'
import Details from '@/components/jobs/DetailsPage'
import Applicants from '@/components/jobs/Applicants'

import Seekers from '@/components/seekers/Index'
import SeekerDetails from '@/components/seekers/Details'

Vue.use(Router)

export default new Router({
  base: '/wwcode/',
  mode: 'history',
  routes: [
    {
      path: '/login',
      components: {
        default:Login,
        layout:BasicLayout
      }
    },
    {
      path: '/construction',
      components: {
        default:Construction,
        layout:CompanyLayout
      }
    },
    {
      path: '/construction2',
      components: {
        default:Construction2,
        layout:CompanyLayout
      }
    },
    {
      path: '/construction3',
      components: {
        default:Construction3,
        layout:CompanyLayout
      }
    },
    {
      path: '/',
      components: {
        default:Jobs,
        layout:CompanyLayout
      }
    },
    {
      path: '/jobs/details',
      name: 'JobDetailsPage',
      components: {
        default:Details,
        layout:CompanyLayout
      }
    },
    {
      path: '/jobs/:id',
      name: 'Applicants',
      components: {
        default:Applicants,
        layout:CompanyLayout
      }
    },
    {
      path: '/seekers',
      components: {
        default:Seekers,
        layout:CompanyLayout
      }
    },
    {
      path: '/seekers/:id',
      components: {
        default:SeekerDetails,
        layout:CompanyLayout
      }
    },
    {
      path: '/settings',
      components: {
        default:Settings,
        layout:CompanyLayout
      }
    }
  ]
})
