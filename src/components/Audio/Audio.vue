<script lang="ts" setup>
import { toRefs, watch, ref, computed } from 'vue'
import { ElSlider, ElImage } from 'element-plus'
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
// 播放模式
// 0 顺序  1 单曲循环  2 随机
const mode = ref(0)
// 播放状态
const status = ref(false)

// 更新时间
audio.addEventListener('timeupdate', (e) => {
  currentTime.value = audio.currentTime
})
// 更新音乐总长度
audio.addEventListener('canplay', () => {
  duration.value = audio.duration
})
// 播放完毕
audio.addEventListener('ended', (e) => {
  if (mode.value == 0) {
    next()
  }
})
// 播放/暂停
audio.addEventListener('pause', () => status.value = false)
audio.addEventListener('play', () => status.value = true)
// 上曲下曲
const next = (val = 1) => {
  if (val > 0) {
    music.index == music.list.length - 1 ? music.index = 0 : music.index++
  } else {
    music.index == 0 ? music.index = music.list.length - 1 : music.index += val
  }
}
// 切换播放/暂停
const switchStatus = () => {
  audio.paused ? audio.play() : audio.pause()
}

// 拖进度条
const change = (val) => {
  audio.currentTime = val
}

// 格式化提示
const formatTooltip = (val) => {
  return dayjs(val * 1000).format('mm:ss')
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
    <div class="left">
      <el-image
        class="avatar"
        :src="music.list[music.index]?.picUrl || music.list[music.index]?.al.picUrl || ''"
      ></el-image>
      <div class="data">
        <div class="name">{{ music.list[music.index]?.name }}</div>
        <div
          class="author"
        >{{ music.list[music.index]?.song?.artists[0]?.name || music.list[music.index]?.ar[0].name }}</div>
      </div>
    </div>
    <div class="center">
      <div class="buttons">
        <go-start theme="outline" size="24" fill="rgba(17, 93, 239, 1)" @click="next(-1)" />
        <div class="play" @click="switchStatus">
          <play v-show="!status" theme="outline" size="35" fill="rgba(17, 93, 239, 1)" />
          <pause v-show="status" theme="outline" size="35" fill="rgba(17, 93, 239, 1)" />
        </div>
        <go-end theme="outline" size="24" fill="rgba(17, 93, 239, 1)" @click="next()" />
      </div>
      <div class="progress">
        <span>{{ currentTimeFormat }}</span>
        <el-slider
          v-model="currentTime"
          :max="duration"
          @change="change"
          :format-tooltip="formatTooltip"
        />
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
  .left {
    height: 100%;
    display: flex;
    align-items: center;
    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 12px;
      margin-right: 16px;
    }
    .data {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .name {
        color: rgba(25, 31, 53, 1);
        letter-spacing: -0.2px;
        font-size: 14px;
        line-height: 20px;
      }
      .author {
        letter-spacing: 0.2px;
        font-size: 10px;
        line-height: 16px;
        color: rgba(25, 31, 53, 0.48);
      }
    }
  }
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