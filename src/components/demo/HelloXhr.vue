<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-table
    :data="testData"
    v-if="testData"
    height="500"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="45">
    </el-table-column>
    <el-table-column
      prop="body"
      label="记录"
     >
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
export default {
  name: 'HelloXhr',
  data () {
    return {
      msg: '接口数据请求demo',
      loading: false,
      testData:[]
    }
  },
  methods: {
    getData () {
      this.loading = true
     this.$http.testData()
     .then(res => {
    this.testData = res;
     })
     .catch(e => {
       debugger
       console.log(e);

     })
    }
  },
  mounted () {
    this.getData()
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
