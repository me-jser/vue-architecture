import Vue from 'vue'
import Vuex from 'vuex'
import HelloVuex from './modules/HelloVuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    /**
     * 处理state. 禁止使用未声明的state 属性
     * @module store/state
     * @export
     * @returns  处理之后的state树
     */
    state: {
    },
    modules: {
      HelloVuex
    }
  })
}
