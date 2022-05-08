<script lang="ts" setup>
import { toRefs, watch, ref, computed } from 'vue'
import { ElSlider } from 'element-plus'
import { Play, Pause, GoEnd, GoStart } from '@icon-park/vue-next'
import { useMusicStore } from '@/config/store'
import { url as getUrlApi } from '@/apis/song'
import dayjs from 'dayjs'
const music = useMusicStore()

const audio = new Audio()

// 音乐切换
watch(() => music.index, async () => {
  audio.src = ''
  if (!music.list[music.index] && !music.list[music.index]?.id) return
  const { data: res } = await getUrlApi(music.list[music.index].id)
  audio.src = res.data[0].url
  audio.play()
}, {
  immediate: true,
  deep: true
})

// 播放进度
const currentTime = ref(0)
// 总长度
const duration = ref(0)

// 更新时间
audio.addEventListener('timeupdate', (e) => {
  currentTime.value = audio.currentTime
})
// 更新音乐总长度
audio.addEventListener('canplay', () => {
  duration.value = audio.duration

})
// 切换播放/暂停
const switchStatus = () => {
  audio.paused ? audio.play() : audio.pause()
}

// 格式化后的
const currentTimeFormat = computed(() => {
  return dayjs(currentTime.value * 1000).format('mm:ss')
})
const durationFormat = computed(() => {
  return dayjs(duration.value * 1000).format('mm:ss')
})
</script>

<template>
  <div class="audio">
    <div class="left"></div>
    <div class="center">
      <div class="buttons">
        <go-start theme="outline" size="24" fill="rgba(17, 93, 239, 1)" />
        <div class="play" @click="switchStatus">
          <play theme="outline" size="35" fill="rgba(17, 93, 239, 1)" />
        </div>
        <go-end theme="outline" size="24" fill="rgba(17, 93, 239, 1)" />
      </div>
      <div class="progress">
        <span>{{ currentTimeFormat }}</span>
        <el-slider v-model="currentTime" :max="duration" />
        <span>{{ durationFormat }}</span>
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