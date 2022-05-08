<script lang="ts" setup>
import { toRefs, watch, ref } from 'vue'
import { ElSlider } from 'element-plus'
import { Play, Pause, GoEnd, GoStart } from '@icon-park/vue-next'

const audio = new Audio()
audio.src = 'http://m8.music.126.net/20220508170525/10356f47bccb1d83cbf663e8d83e6a36/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3'
const currentTime = ref(0)
</script>

<template>
  <div class="audio">
    <div class="left"></div>
    <div class="center">
      <div class="buttons">
        <go-start theme="outline" size="24" fill="rgba(17, 93, 239, 1)" />
        <play theme="outline" size="35" fill="rgba(17, 93, 239, 1)" />
        <go-end theme="outline" size="24" fill="rgba(17, 93, 239, 1)" />
      </div>
      <div class="progress">
        <span>1:11</span>
        <el-slider v-model="currentTime" />
        <span>10:10</span>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<style lang="less" scoped>
.audio {
  display: flex;
  justify-content: space-around;
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 550px;
    .buttons {
      width: 200px;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    .progress {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      color: rgba(17, 93, 239, 1);
      letter-spacing: -0.16px;
      font-size: 14px;
      .el-slider {
        margin: 0 10px;
        :deep(.el-slider__button) {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
}
</style>