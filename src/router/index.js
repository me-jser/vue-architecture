import Vue from 'vue'
import Router from 'vue-router'

import baseRouter from './modules/base'
import headerRouter from './modules/header'

Vue.use(Router)
let router = baseRouter

export default new Router({
  routes: router
})
