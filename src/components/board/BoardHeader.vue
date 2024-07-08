<template>
  <div class="container-header">
    <img
      class="logotipo-img"
      src="../../../public/logotipo.png"
      alt="Kanban Logotipo"
    />
    <h3>
      {{ boardName }}
      <button>
        <b-icon
          icon="chevron-down"
          font-scale="1"
          variant="$main-purple"
        ></b-icon>
      </button>
    </h3>
    <div class="buttons-options">
      <EnhancedButton width="60" text="+" class="button-add-mobile" />
      <EnhancedButton
        width="250"
        text="+ Add New Task"
        class="button-add-desktop"
      />
      <button>
        <b-icon
          icon="three-dots-vertical"
          font-scale="1.3"
          shift-h="-4"
          variant="$main-purple"
        ></b-icon>
      </button>
    </div>
  </div>
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
    .logotipo-img
      display: none
    h3
      font-size: 26px
      font-weight: bold
      margin: 0
      button
        display: none

.buttons-options
    display: flex
    justify-content: space-between
    width: 300px
    button
      background-color: transparent

.button-add-mobile
    display: none

.button-add-desktop
    display: flex

@media (max-width: 768px)


@media (max-width: 840px)
  .container-header
    .logotipo-img
      display: flex
      width: 45px
      height: 45px
    h3
      font-size: 18px
      button
        display: inline
        margin-left: 5px
        color: $main-purple
        background-color: transparent
  .buttons-options
    width: 100px
  .button-add-desktop
    display: none
  .button-add-mobile
    display: flex
</style>
