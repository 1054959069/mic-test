<script setup lang="ts">
import microObj from "@micro-zoe/micro-app";
import router from "@/router";
import { get } from "common-api";
const token = "test";
console.log(get);
microObj?.setGlobalData({ token }, () => {
  console.log("[GlobalData] setGlobalData success");
});
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
