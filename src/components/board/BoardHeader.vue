<template>
  <section class="container-header">
    <h3>{{ boardName }}</h3>
    <div class="buttons-options">
      <EnhancedButton width="250" text="+ Add New Task" />
      <button>
        <b-icon
          icon="three-dots-vertical"
          font-scale="1.3"
          shift-h="-4"
          variant="$main-purple"
        ></b-icon>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
const EnhancedButton = () => import("@/components/EnhancedButton.vue");
export default Vue.extend({
  components: {
    EnhancedButton,
  },
  props: {
    boardName: {
      type: String,
    },
  },
});
</script>

<style lang="sass" scoped>
.container-header
    width: 100vw
    max-height: 100px
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 25px
    background-color: $white
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08)
    h3
        font-size: 26px
        font-weight: bold
        margin: 0

.buttons-options
    display: flex
    justify-content: space-between
    width: 300px
    button
        background-color: transparent
</style>
