<script lang="ts" setup>
import propNames from './props'
import dayjs from 'dayjs'
const props = defineProps(propNames)

const formatDate = (duration: string | number) => {
  return dayjs(duration).format('mm:ss')
}
</script>

<template>
  <div class="song">
    <div class="left">
      <div class="index">{{ index }}</div>
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