<template>
  <div class="scrollbar">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow: scroll;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>