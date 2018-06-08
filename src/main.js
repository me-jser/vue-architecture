// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  createStore
} from './store/index'
import {
  Message,
  Loading,
  Table,
  TableColumn,
  Input,
  Button,
  Select,
  Option
} from 'element-ui'

import http from './api/apiList'
/**
 * 按需加载element-ui
 * @module vue/baseConfig
 * @config
 */
Vue.use(Loading.directive)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$http = http
Vue.config.productionTip = false

const store = createStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
