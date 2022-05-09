<script lang="ts" setup>
import { Search } from '@icon-park/vue-next'
</script>

<template>
  <div class="search-input">
    <search class="search" theme="outline" size="20" fill="rgba(17, 93, 239, 1)" />
    <input type="text" placeholder="搜索" />
  </div>
</template>

<style lang="less" scoped>
.search-input {
  width: 256px;
  height: 40px;
  background: rgba(255, 255, 255, 0.5);
  // background: red;
  background-blend-mode: normal;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding-left: 1em;
    box-sizing: border-box;
  }
  .search {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
}
</style>