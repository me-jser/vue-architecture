/**
 * @file vuex actions
 * @author xiaoshuai11
 * @version 0.1.0
 * @requires axios
 * @module  store/modules/actions
 */
import {
  exportApis
} from '../api/httpMethods'

import apiList from '../api/backendApiList'
import * as types from './ mutation-types'
let apis = exportApis()

const actions = {
  getTestData (store) {
    return apis.get(apiList.test)
      .then(res => {
        store.commit(types.SAVE_TEST_DATA, res)
        return Promise.resolve()
      })
      .catch(err => {
        // FIXME: 更完善的实现
        return new Promise.reject(err)
      })
  }
}

export default actions
