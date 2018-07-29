import Vue from 'vue'
import Router from 'vue-router'

import BasicLayout from '@/layouts/BasicLayout'
import CompanyLayout from '@/layouts/CompanyLayout'

import Login from '@/components/Login'
import Settings from '@/components/Settings'
// import Construction from '@/components/Construction'
// import Construction2 from '@/components/Construction2'
// import Construction3 from '@/components/Construction3'
import UnderConstruction from '@/components/UnderConstruction'

import Jobs from '@/components/jobs/Index'
import Details from '@/components/jobs/DetailsPage'
import Applicant from '@/components/jobs/Applicant'
import Applications from '@/components/jobs/Applications'

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
      path: '/assignment',
      components: {
        default:UnderConstruction,
        layout:CompanyLayout
      }
    },
    {
      path: '/assignment/create',
      components: {
        default:UnderConstruction,
        layout:CompanyLayout
      }
    },
    {
      path: '/applicant',
      components: {
        default:UnderConstruction,
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
      path: '/jobs',
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
      name: 'Applications',
      components: {
        default:Applications,
        layout:CompanyLayout
      }
    },
    {
      path: '/jobs/:job/applicant/:applicant',
      name: 'Applicant',
      components: {
        default:Applicant,
        layout:CompanyLayout
      }
    },
    {
      path: '/talent',
      components: {
        default:Seekers,
        layout:CompanyLayout
      }
    },
    {
      path: '/talent/:id',
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
