<script setup lang="ts">
import Header from './components/Header/Header.vue'
import Menu from './components/Menu/Menu.vue'
import Audio from './components/Audio/Audio.vue'
import Scrollbar from './components/Scrollbar/Scrollbar.vue'
</script>

<template>
  <div class="he-music">
    <Header></Header>
    <Menu></Menu>
    <Scrollbar class="content">
      <router-view></router-view>
    </Scrollbar>
    <Audio></Audio>
  </div>
</template>

<style lang="less" scoped>
.he-music {
  height: 100vh;
  display: grid;
  grid-template-columns: 230px 1fr;
  // 230
  grid-template-rows: 60px 1fr 80px;
  // grid-column-gap: 0px;
  // grid-row-gap: 0px;
  // justify-items: center;
  align-items: center;

  .header {
    grid-area: 1 / 1 / 2 / 3;
  }
  .menu {
    grid-area: 2 / 1 / 3 / 2;
    height: 90%;
  }
  .content {
    grid-area: 2 / 2 / 3 / 3;
    height: 100%;
    overflow-y: scroll;
  }
  .audio {
    grid-area: 3 / 1 / 4 / 3;
  }
}
</style>
