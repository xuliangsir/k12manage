/**
 * Created by HarryLee on 2017/5/21.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Regist from '../components/regist.vue'
import Layout from '../components/layout.vue'
import Index from '../components/index.vue'
import DataStatistics from '../components/functions/dataStatistics.vue'
import UserManagement from '../components/functions/userManagement.vue'

import CertifiedCoach from '../components/functions/certifiedCoach.vue'
import CoachList from '../components/functions/children/coachList.vue'
import CoachDetail from '../components/functions/children/coachDetail.vue'
import CourseDetail from '../components/functions/children/courseDetail.vue'

import CoachAuthentication from '../components/functions/coachAuthentication.vue'
import UncertifiedList from '../components/functions/children/uncertifiedList.vue'
import CertifiedList from '../components/functions/children/certifiedList.vue'
import CertifySeacrchList from '../components/functions/children/certifySearchList.vue'

import ActionStorageManagement from '../components/functions/actionStorageManagement.vue'
import StorageAlreadyHave from '../components/functions/children/storageAlreadyHave.vue'
import ActionDetail from '../components/functions/children/actionDetail.vue'
import ActionEdit from '../components/functions/children/actionEdit.vue'
import AddActions from '../components/functions/children/addActions.vue'


// import LogManagement from '../components/functions/logManagement.vue'
// import SaaS from '../components/functions/SaaS.vue'
// import SaaS_info from '../components/functions/children/SaaS_info.vue'
import error from '../components/error.vue'

import upload from '../components/functions/children/youtu.vue'
import picture from '../components/functions/picture.vue'
import kindergarten from '../components/functions/kindergarten.vue'
import klasses from '../components/functions/klasses.vue'
import courses from '../components/functions/courses.vue'
import students from '../components/functions/students.vue'
import guardian from '../components/functions/guardian.vue'
import teachers from '../components/functions/teachers.vue'
import teaching from '../components/functions/teaching.vue'
import cookbook from '../components/functions/cookbook.vue'
import klassplans from '../components/functions/klassplans.vue'

import attendance from '../components/functions/attendance.vue'
import attendanceAdd from '../components/functions/attendanceAdd.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      component: Login
    },
    {
      path: '/regist',
      component: Regist
    },
    {
      path: '/upload',
      component: upload
    },

    {
      path: '/',
      component: Layout,
      children: [{
          path: 'index',
          component: Index
        },
        {
          path: 'dataStatistics',
          component: DataStatistics
        },
        {
          path: 'userManagement',
          component: UserManagement
        },
        {
          path: 'certifiedCoach',
          component: CertifiedCoach,
          children: [{
              path: 'coachList',
              component: CoachList
            },
            {
              path: 'coachDetail',
              component: CoachDetail
            },
            {
              path: 'courseDetail',
              component: CourseDetail
            },
          ]
        },
        {
          path: 'Authentication',
          component: CoachAuthentication,
          children: [{
              path: 'uncertifiedList',
              component: UncertifiedList
            },
            {
              path: 'certifiedList',
              component: CertifiedList
            },
            {
              path: 'certifySearchList',
              component: CertifySeacrchList
            }
          ]
        },
        {
          path: 'action',
          component: ActionStorageManagement,
          children: [{
              path: 'storageAlreadyHave',
              component: StorageAlreadyHave
            },
            {
              path: 'actionDetail',
              component: ActionDetail
            },
            {
              path: 'actionEdit',
              component: ActionEdit
            },
            {
              path: 'addActions',
              component: AddActions
            }


          ]
        },
        // {
        //   path:'/logManagement',
        //   component:LogManagement
        // },
        // {
        //   path:'/SaaS',
        //   component:SaaS,
        //   children:[
        //     {
        //       path:'/SaaS/SaaS_info',
        //       component:SaaS_info
        //     }
        //   ]
        // },
        {
          path: 'picture',
          component: picture
        },
        {
          path: 'kindergarten',
          component: kindergarten
        },
        {
          path: 'klasses',
          component: klasses
        },
        {
          path: 'courses',
          component: courses
        },
        {
          path: 'students',
          component: students
        },
        {
          path: 'attendance',
          component: attendance
        },
        {
          path: 'attendanceAdd',
          component: attendanceAdd
        },
        {
          path: 'error',
          component: error
        },
        {
           path: 'guardian',
           component: guardian
         },
         {
           path: 'teachers',
           component: teachers
         },
         {
           path: 'teaching',
           component: teaching
         },
         {
           path: 'cookbook',
           component: cookbook
         },
         {
           path: 'klassplans',
           component: klassplans
         }

      ]
    },
  ]
})
