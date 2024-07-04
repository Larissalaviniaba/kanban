<template>
  <div class="container-boards">
    <h5>All Boards ({{ boards.length }})</h5>

    <div class="boards-list">
      <button
        class="button-board"
        v-for="(board, i) in boards"
        :key="i"
        @click="selectBoard(i)"
        :class="{ 'button-board-select': buttonBoardSelected === i }"
      >
        <b-icon
          icon="kanban-fill"
          font-scale="1.3"
          shift-h="-4"
          variant="$medium-grey"
        ></b-icon>
        {{ board }}
      </button>
    </div>
    <button class="create-new-board">
      <b-icon
        icon="kanban-fill"
        font-scale="1.3"
        shift-h="-4"
        variant="$main-purple"
      ></b-icon>
      + Create New Board
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    boards: {
      type: Array,
      validator: function (value) {
        return (
          Array.isArray(value) &&
          value.every((item) => typeof item === "string")
        );
      },
    },
  },
  data() {
    return {
      buttonBoardSelected: -1,
    };
  },
  methods: {
    selectBoard(index: number): void {
      this.buttonBoardSelected = index;
      this.$emit("board-selected", this.boards[index]);
    },
  },
});
</script>

<style lang="sass" scoped>
.container-boards
  flex: 1
  display: flex
  flex-direction: column
  background-color: $white
  overflow-y: hidden
  h5
    width: 100%
    font-weight: bold
    font-size: 15px
    color: $medium-grey
    padding: 10px 0 10px 30px
    letter-spacing: 0.1em
    text-transform: uppercase
    margin-bottom: 5px

.boards-list
  padding: 10px 10px 0 0
  overflow-y: auto
  max-height: 610px
  scrollbar-width: thin
  scrollbar-color: $light-grey

  &::-webkit-scrollbar
    width: 8px
  &::-webkit-scrollbar-track
    background: $light-grey
    border-radius: 10px
  &::-webkit-scrollbar-thumb
    background-color: $light-grey
    border-radius: 10px
    border: 2px solid $light-grey

.button-board,
.create-new-board
  display: flex
  justify-content: flex-start
  align-items: center
  padding-left: 33px
  width: 95%
  height: 50px
  font-weight: bold
  background-color: transparent
  &:hover
    background-color: $purple-light
    color: $main-purple
    border-radius: 0 50px 50px 0

.button-board
  color: $medium-grey
  &.button-board-select
    background-color: $main-purple
    color: $white
    border-radius: 0 50px 50px 0

.create-new-board
  margin: 10px 0
  color: $main-purple
</style>
