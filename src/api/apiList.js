/**
 * @file 后端API列表
 * @author xiaoshuai11
 * @version 0.1.0
 * @requires none
 * @module api/apiList
 */
import {
  exportApis
} from './httpMethods'
let apis = exportApis()

export default {
  testData () {
    return apis.get('/test/posts', {data: 123})
  }
}
