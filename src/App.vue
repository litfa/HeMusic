<script setup lang="ts">
import Header from './components/Header/Header.vue'
import Menu from './components/Menu/Menu.vue'
</script>

<template>
  <div class="he-music">
    <Header></Header>
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.he-music {
  display: grid;
  grid-template-columns: 230px 1fr;
  // 230
  grid-template-rows: 100px 1fr 1fr;
  // grid-column-gap: 0px;
  // grid-row-gap: 0px;
  .header {
    grid-area: 1 / 1 / 2 / 3;
  }
  .menu {
    grid-area: 2 / 1 / 3 / 2;
  }
}
</style>
