import api from '../api/xhr'

const actions = {
  getTestData () {
    return api.get('/test/posts')
      .then(res => {
        debugger
        console.log('bingo')
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default actions
