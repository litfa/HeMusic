<script lang="ts" setup>

</script>

<template>
  <div class="playing-icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="less" scoped>
.playing-icon {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    width: 0px;
    height: 10px;
    border: 1px solid rgba(17, 93, 239, 1);
    border-radius: 5px;
    &:nth-child(1) {
      animation: playing-1 0.7s infinite;
    }
    &:nth-child(2) {
      animation: playing-3 0.7s infinite;
    }
    &:nth-child(3) {
      animation: playing-2 0.7s infinite;
    }
  }
}
@keyframes playing-1 {
  0% {
    height: 6px;
  }
  40% {
    height: 10px;
  }
  100% {
    height: 6px;
  }
}
@keyframes playing-2 {
  0% {
    height: 10px;
  }
  50% {
    height: 5px;
  }
  100% {
    height: 10px;
  }
}
@keyframes playing-3 {
  0% {
    height: 4px;
  }
  60% {
    height: 10px;
  }
  100% {
    height: 4px;
  }
}
</style>