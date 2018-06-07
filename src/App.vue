<template>
  <div id="app"  v-loading="loading">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
      {{data}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getType } from "@/util/utils";
export default {
  name: "App",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState({
      data: state => {
        return state.testData;
      }
    })
  },
  methods: {},
  mounted() {
    this.loading = true;
    let xhr = this.$store
      .dispatch("getTestData")
      .then(res => {
        this.loading = false;
      })
      .catch(e => {
        this.loading = false;
      });
  }
};
</script>
