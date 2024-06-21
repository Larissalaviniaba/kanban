<template>
  <div>
    <b-button
      pill
      :class="buttonClass"
      :style="{ width: `${width}px`, height: `${height}px` }"
      @click="handleButtonClick"
    >
      {{ text }}
    </b-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ButtonProps {
  width: number;
  height: number;
  text: string;
  variant: "primary" | "secondary" | "destructive";
}

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 40,
    },
    text: {
      type: String,
      default: "Button",
    },
    variant: {
      type: String,
      required: true,
      default: "primary",
    },
  },
  computed: {
    buttonClass(this: ButtonProps): string {
      switch (this.variant) {
        case "primary":
          return "button-primary";
        case "secondary":
          return "button-secondary";
        case "destructive":
          return "button-destructive";
        default:
          return "button-primary";
      }
    },
  },
  methods: {
    handleButtonClick(): void {
      this.$emit("buttonClicked", true);
    },
  },
});
</script>

<style lang="sass" scoped>
.button-primary, .button-secondary, .button-destructive
    border: none
    font-weight: normal
    transition: background-color 0.3s ease, color 0.3s ease

.button-primary
    background-color: $main-purple
    color: $white
    &:hover
      background-color: $main-purple-hover
      color: $white
    &:active, &:focus
      background-color: $main-purple !important
      color: $white !important
      outline: none
      ox-shadow: none

.button-secondary
    background-color: $purple-light
    color: $main-purple
    &:hover
      background-color: $purple-light-hover
      color: $main-purple
    &:active, &:focus
      background-color: $purple-light !important
      color: $main-purple !important
      outline: none
      box-shadow: none

.button-destructive
    background-color: $red
    color: $white
    &:hover
        background-color: $red-hover
        color: $white
    &:active, &:focus
      background-color: $red !important
      color: $white !important
      outline: none
      box-shadow: none
</style>
