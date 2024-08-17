<script setup lang="ts">
import "vant/es/toast/style"; //方法调用需要引入样式
import "vant/es/notify/style";
import "vant/es/dialog/style";
const route = useRoute();
const title = computed(() => {
  return route.meta.title;
});

const showNavBar = computed(() => {
  return Object.keys(route.meta).length > 0 && !route.meta.customNavBar;
});
onMounted(() => {
  window.microApp.forceDispatch({ type: "mounted" });
});
</script>

<template>
  <NavBar :title="title" />
  <router-view />
</template>

<style></style>
