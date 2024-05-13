<script setup lang="ts">
import router from "@/router";
function onClick() {
  router.push({
    name: "third-app"
  });
}
</script>
<template>
  <div class="  " @click="onClick">进入子应用</div>
</template>

<style lang="scss" scoped></style>
