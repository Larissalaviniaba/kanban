<template>
  <AppHome />
</template>

<script lang="ts">
import Vue from "vue";
const AppHome = () => import("@/pages/AppHome.vue");

export default Vue.extend({
  name: "App",
  components: {
    AppHome,
  },
});
</script>

<style lang="sass">
body
  height: 100vh
  background-color: $light-grey
  font-family: "Plus Jakarta Sans", sans-serif
</style>
