<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { objectValidation } from '@/util/utils'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    objValidae () {
      let o = {
        t: {
          s: {
            a: {
              s: 1
            }
          }
        }
      }
      if (objectValidation(o, 't.s.a')) {
        console.log('bingo')
      }
    }
  },
  mounted () {
    this.objValidae()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
