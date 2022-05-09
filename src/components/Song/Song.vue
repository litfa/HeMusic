<script lang="ts" setup>
import propNames from './props'
import dayjs from 'dayjs'
import { useMusicStore } from '@/config/store'
import PlayingIcon from '@/components/PlayingIcon/PlayingIcon.vue'
const props = defineProps(propNames)
const music = useMusicStore()

const formatDate = (duration: string | number) => {
  return dayjs(duration).format('mm:ss')
}
</script>

<template>
  <div class="song" :class="{ active: props.id == music.id }">
    <div class="left">
      <div class="index">
        <template v-if="props.id == music.id">
          <PlayingIcon></PlayingIcon>
        </template>
        <template v-else>{{ index }}</template>
      </div>
      <div class="name">{{ musicName }}</div>
    </div>
    <div class="right">
      <div class="author">{{ author }}</div>
      <div class="length">{{ formatDate(musicLength) }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.song {
  width: 544px;
  height: 44px;
  background: rgba(255, 255, 255, 0.8);
  background-blend-mode: normal;
  border: 0.5px solid rgba(17, 93, 239, 0.16);
  border-radius: 12px;
  backdrop-filter: blur(20px);
  mix-blend-mode: normal;
  font-family: "FivoSans";
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 3px;
  cursor: pointer;
  &:hover {
    background-color: #e4edff;
  }
  &.active {
    background: rgba(144, 182, 255, 0.4);
    border-color: #0000;
  }
  .left {
    width: 240px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      line-height: 44px;
    }
    .index {
      width: 24px;
      height: 24px;
      line-height: 24px;
      font-size: 11px;
      display: flex;
      align-items: center;
    }
    .name {
      width: 160px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .right {
    display: flex;
    width: 270px;
    justify-content: space-around;
    .author {
      color: rgba(25, 31, 53, 1);
      letter-spacing: -0.16px;
      font-size: 12px;
      line-height: 20px;
      width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .length {
      color: rgba(25, 31, 53, 1);
      letter-spacing: -0.16px;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>