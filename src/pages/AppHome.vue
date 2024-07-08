<template>
  <div>
    <VerticalNavbar @board-selected="updateSelectedBoard" />
    <BoardHeader :boardName="selectedBoard" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const BoardHeader = () => import("@/components/board/BoardHeader.vue");
const VerticalNavbar = () =>
  import("@/components/vertical-navbar/VerticalNavbar.vue");

export default defineComponent({
  components: {
    VerticalNavbar,
    BoardHeader,
  },
  data() {
    return {
      selectedBoard: "",
      boardIsOpen: false,
    };
  },
  methods: {
    updateSelectedBoard(board: string) {
      this.selectedBoard = board;
    },
  },
});
</script>

<style lang="sass" scoped>
div
  display: flex
  height: 100vh
  background-color: $light-grey
  font-family: "Plus Jakarta Sans", sans-serif
</style>
