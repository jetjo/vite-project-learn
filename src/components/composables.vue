<template>
  <div class="box">鼠标位置：{{ `${x}, ${y}` }}</div>
</template>

<script lang="ts">
export default {
  name: "Composables",
};
</script>

<script setup lang="ts">
import { $ } from "vue/macros";
import { useComposables } from "./composables";

const { x, y } = useComposables();

console.log(x.value, y.value);
</script>

<style lang="scss" scoped>
.box {
  height: 100vh;
}
</style>
