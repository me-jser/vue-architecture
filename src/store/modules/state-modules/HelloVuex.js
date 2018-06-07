export default {
  state: () => {
    let state = {
      testData: null
    }
    return Object.preventExtensions(state)
  }
}
// FIXME: 模块化
