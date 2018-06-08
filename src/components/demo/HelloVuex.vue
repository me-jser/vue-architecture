<template>
<div>
  <el-input v-model="inputStr"></el-input>
  <el-button @click="setData" type="primary">设置</el-button>
 vuex 中存储的值 {{data}}

   <el-select v-model="value5" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</div>

</template>
<script>
export default {
  name: "hello-vuex",
  data() {
    return {
      inputStr: "",
      value5:[],
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
    };
  },
  computed: {
    data() {
      return this.$store.getters.testDataGetter;
    }
  },
  methods: {
    setData() {
      debugger
      this.$store.dispatch("setTestData", this.inputStr);
    }
  }
};
</script>
<style>
</style>
