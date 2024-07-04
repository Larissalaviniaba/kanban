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

    <div v-if="isMenuVisible" class="container-boards-overview">
      <BoardsOverview :boards="boards" @board-selected="handleBoardSelected" />
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
const BoardsOverview = () =>
  import("@/components/vertical-navbar/BoardsOverview.vue");

export default Vue.extend({
  components: {
    BoardsOverview,
  },
  data() {
    return {
      boards: ["Platform Launch", "Marketing Plan", "Roadmap"],
      isMenuVisible: true,
      selectedBoard: "",
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    handleBoardSelected(board: string) {
      this.selectedBoard = board;
      this.$emit("board-selected", this.selectedBoard);
    },
  },
  created() {
    if (this.boards.length > 0) {
      this.selectedBoard = this.boards[0];
      this.$emit("board-selected", this.selectedBoard);
    }
  },
});
</script>

<style lang="sass" scoped>
.container-nav,
.container-boards-overview
  max-width: 280px
  min-width: 280px
  height: 100vh
  display: flex
  flex-direction: column

.logotipo
  display: flex
  justify-content: flex-start
  align-items: center
  width: 100%
  min-height: 100px
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

.menu-hide
  display: flex
  background-color: $white
  padding-bottom: 40px
  button
    width: 95%
    height: 50px
    color: $medium-grey
    font-weight: bold
    background-color: transparent
    text-align: start
    span
      display: inline-block
      transition: transform 0.2s ease-in-out
      margin-left: 40px
    &:hover
      background-color: $purple-light
      color: $main-purple
      border-radius: 0 50px 50px 0

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
