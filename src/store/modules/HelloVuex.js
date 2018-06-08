import * as types from '../ mutation-types'

export default {
  state: () => {
    let state = {
      testData: null
    }
    return Object.preventExtensions(state)
  },
  actions: {
    setTestData (context, payload) {
      context.commit(types.SAVE_TEST_DATA, payload)
    }
  },
  mutations: {
    [types.SAVE_TEST_DATA] (state, payload) {
      state.testData = payload
    }
  },
  getters: {
    testDataGetter (state) {
      return state.testData || []
    }
  }
}
