import Vue from 'vue'
import Router from 'vue-router'

import baseRouter from './modules/base'
import headerRouter from './modules/demo'

Vue.use(Router)
let router = baseRouter.concat(headerRouter)

export default new Router({
  routes: router
})
