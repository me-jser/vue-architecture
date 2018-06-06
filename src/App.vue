<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {},
  mounted (){
    this.$store.dispatch('getTestData')
  }
}
</script>
