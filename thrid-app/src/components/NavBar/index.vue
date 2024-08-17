<script setup lang="ts" name="nav-bar">
defineProps({
  title: {
    type: String,
    required: true
  },
  fixed: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <van-nav-bar
    class="nav-bar"
    :title="title"
    :fixed="fixed"
    :placeholder="fixed"
    left-arrow
    @click-left="$router.back()"
  />
</template>

<style scoped lang="scss">
.nav-bar {
  :deep(.van-nav-bar) {
    background-color: #3998ff;
    z-index: 20;
  }

  :deep(.van-nav-bar__title) {
    color: #fff; /* 设置标题文字颜色为红色 */
  }
  :deep(.van-nav-bar .van-icon) {
    color: white;
  }
}
</style>
