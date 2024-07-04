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

<style lang="sass"></style>
