<template>
  <!-- <EnhancedButton variant="destructive" /> -->
  <BoardMenuEntry />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// const EnhancedButton = () => import("@/components/EnhancedButton.vue");
const BoardMenuEntry = () =>
  import("@/components/VerticalMenu/BoardMenuEntry.vue");
export default defineComponent({
  components: {
    BoardMenuEntry,
    // EnhancedButton,
  },
});
</script>
