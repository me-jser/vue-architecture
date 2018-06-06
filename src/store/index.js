import Vue from 'vue'
import Vuex from 'vuex'
import actions from './modules/actions'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      testData: null
    },
    actions
  })
}
