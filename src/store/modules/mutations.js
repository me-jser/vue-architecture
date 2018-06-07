import * as types from './ mutation-types'

export default {
  [types.SAVE_TEST_DATA] (state, data) {
    state.testData = data
  }
}
