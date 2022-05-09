<script lang="ts" setup>
import SearchInput from '../SearchInput/SearchInput.vue'
</script>

<template>
  <div class="header">
    <div>
      <div class="logo">He Music</div>
    </div>
    <div>
      <search-input v-if="$route.path != '/search'" />
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="less" scoped>
.header {
  width: 1200px;
  height: 44px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: rgba(25, 31, 53, 1);
    letter-spacing: 2.4px;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
    font-family: sans-serif;
  }
}
</style>