<template>
  <EnhancedButton variant="destructive" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EnhancedButton from "@/components/EnhancedButton.vue";

export default defineComponent({
  components: {
    EnhancedButton,
  },
});
</script>
