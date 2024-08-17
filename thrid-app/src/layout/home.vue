<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { path } = route.query;
console.log("path", path);

if (path) {
  router.push(path as string);
}
</script>

<template>
  <div>home页</div>
</template>

<style scoped></style>
