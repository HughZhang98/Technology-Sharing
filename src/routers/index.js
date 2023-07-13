import Vue from 'vue'
import Router from 'vue-router'

import Start from '../pages/Start'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/Home',
      name: 'Home',
      meta: {
        index: 0
      },
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/Product',
      name: 'Product',
      meta: {
        index: 1
      },
      component: () => import('../pages/Product.vue')
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      meta: {
        index: 2
      },
      component: () => import('../pages/Shopping.vue')
    },
    {
      path: '/Mine',
      name: 'Mine',
      meta: {
        index: 3
      },
      component: () => import('../pages/Mine.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      meta: {
        index: 6
      },
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/Essay/:id',//动态路由
      name: 'Essay',
      meta: {
        index: 1
      },
      component: () => import('../pages/Essay.vue')
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      meta: {
        index: 5
      },
      component: () => import('../pages/ShoppingCart.vue')
    },
    {
      path: '/News',
      name: 'News',
      meta: {
        index: 5
      },
      component: () => import('../pages/News.vue')
    },
    {
      path: '/ShoppingDetail/:id',//动态路由
      name: 'ShoppingDetail',
      component: () => import('../pages/ShoppingDetail.vue')
    },
    {
      path: '/Phones/:id',//动态路由
      name: 'Phones',
      meta: {
        index: 1
      },
      component: () => import('../pages/Phones.vue'),
    },
    {
      path: '/ProductDetail/:no',//动态路由
      name: 'ProductDetail',
      meta: {
        index: 2
      },
      component: () => import('../pages/ProductDetail.vue')
    },
    {
      path: '/Success',
      name: 'Success',
      component: () => import('../pages/Success.vue')
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: () => import('../pages/Setting.vue')
    },
    {
      path: '/Change',
      name: 'Change',
      component: () => import('../pages/Change.vue')
    },
    {
      path: '/SearchDetail',
      name: 'SearchDetail',
      component: () => import('../pages/SearchDetail.vue')
    },
    {
      path: '/ManageLogin',
      name: 'ManageLogin',
      component: () => import('../pages/ManageLogin.vue')
    },
    {
      path: '/Manage',
      name: 'Manage',
      component: () => import('../pages/Manage.vue')
    },
    {
      path: '/ManageEssay',
      name: 'ManageEssay',
      component: () => import('../components/ManageEssay.vue')
    },
    {
      path: '/ManageComment',
      name: 'ManageComment',
      component: () => import('../components/ManageComment.vue')
    },
    {
      path: '/ManageProduct',
      name: 'ManageProduct',
      component: () => import('../components/ManageProduct.vue')
    },
    {
      path: '/ManageShopping',
      name: 'ManageShopping',
      component: () => import('../components/ManageShopping.vue')
    },
    {
      path: '/ManageOrder',
      name: 'ManageOrder',
      component: () => import('../components/ManageOrder.vue')
    },
  ]
})
