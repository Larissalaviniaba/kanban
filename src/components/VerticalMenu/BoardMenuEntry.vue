<template>
  <section class="container-nav">
    <div class="logotipo">
      <img
        class="logotipo-img"
        src="../../../public/logotipo.png"
        alt="Kanban Logotipo"
      />
      <h1>Kanban</h1>
    </div>

    <div v-if="isMenuVisible" class="container-boards">
      <h5>All Boards ({{ boards.length }})</h5>

      <div class="boards-list">
        <button
          class="button-board"
          v-for="(board, i) in boards"
          :key="i"
          @click="toggleButton(i)"
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
    </div>

    <div v-if="isMenuVisible" class="menu-hide">
      <button @click="toggleMenu">
        <span>
          <b-icon icon="eye-slash" font-scale="1.3" shift-h="-4"></b-icon>
          Hide Sidebar
        </span>
      </button>
    </div>
    <div v-if="!isMenuVisible" class="show-menu">
      <button @click="toggleMenu">
        <b-icon icon="eye" font-scale="1.3"></b-icon>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      boards: ["Platform Launch", "Marketing Plan", "Roadmap"],
      buttonBoardSelected: -1,
      isMenuVisible: true,
    };
  },
  methods: {
    toggleButton(index: number): void {
      this.buttonBoardSelected = index;
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
});
</script>

<style lang="sass" scoped>
.container-nav
  width: 300px
  height: 100vh
  display: flex
  flex-direction: column

.logotipo
  display: flex
  justify-content: flex-start
  align-items: center
  width: 100%
  height: 120px
  padding: 10px 10px 10px 30px
  background-color: $white
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08)
  img
    width: 40px
    height: 40px
    margin-right: 20px
  h1
    font-size: 35px
    font-weight: bold
    margin: 0

.container-boards
  flex: 1
  display: flex
  flex-direction: column
  background-color: $white
  overflow-y: auto
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
  flex: 1
  padding: 10px 10px 0 0
  overflow-y: auto

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

.menu-hide
  display: flex
  background-color: $white
  padding-bottom: 40px
  button
    color: $medium-grey
    font-weight: bold
    background-color: transparent
    padding: 20px 40px
    text-align: left
    span
      display: inline-block
      transition: transform 0.2s ease-in-out
    &:hover
      transform: scale(1.1)

.show-menu
  display: flex
  align-items: center
  width: 70px
  height: 50px
  margin-top: auto
  margin-bottom: 40px
  padding: 10px
  border-radius: 0 50px 50px 0
  background-color: $main-purple
  button
    width: 100%
    color: $white
    background-color: transparent
    transition: transform 0.2s ease-in-out
  &:hover
    background-color: $purple-light-hover
    transform: scale(1.1)
</style>
