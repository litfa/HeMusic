<script lang="ts" setup>
import { Fire, RankingList, ViewList, History } from '@icon-park/vue-next'
</script>

<template>
  <div class="menu">
    <h2>音乐</h2>
    <li>
      <fire theme="outline" size="18" fill="rgba(17, 93, 239, 1)" />热门推荐
    </li>
    <li>
      <ranking-list theme="outline" size="18" fill="rgba(17, 93, 239, 1)" />榜单
    </li>
    <h2>我的音乐</h2>
    <li>
      <view-list theme="outline" size="18" fill="rgba(17, 93, 239, 1)" />我的歌单
    </li>
    <li>
      <history theme="outline" size="18" fill="rgba(17, 93, 239, 1)" />历史播放
    </li>
  </div>
</template>

<style lang="less" scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    width: 148px;
    color: rgba(25, 31, 53, 1);
    letter-spacing: -0.2px;
    font-size: 18px;
    line-height: 28px;
  }
  li {
    width: 148px;
    color: rgba(25, 31, 53, 1);
    letter-spacing: 0.28px;
    font-size: 14px;
    line-height: 24px;
    list-style: none;
    margin: 16px 0;
    display: flex;
    align-items: center;
    .i-icon {
      margin-right: 16px;
      line-height: 0;
    }
  }
}
</style>