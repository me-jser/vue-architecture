import Vue from 'vue'
import Vuex from 'vuex'
import actions from './modules/actions'
import mutations from './modules/mutations'
import getters from './modules/getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    /**
     * 处理state. 禁止使用未声明的state 属性
     * @module store/state
     * @export
     * @returns  处理之后的state树
     */
    state: () => {
      let state = {
        testData: null
      }
      return Object.preventExtensions(state)
    },
    actions,
    mutations,
    getters
  })
}
