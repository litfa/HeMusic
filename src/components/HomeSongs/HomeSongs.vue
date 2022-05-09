<script lang="ts" setup>
import Song from '../Song/Song.vue'
import { newsong } from '@/apis/personalized'
import { ref } from 'vue'
import Scrollbar from '../Scrollbar/Scrollbar.vue'
import { useMusicStore } from '@/config/store'

const music = useMusicStore()
const songs = ref([])

const getSongs = async () => {
  const { data: res } = await newsong()
  songs.value = res.result
}
getSongs()

const playMusic = (id) => {
  music.setMusicList(songs.value)
  music.play({ id })
}
</script>

<template>
  <h2>音乐</h2>
  <scrollbar>
    <Song
      v-for="(i, index) in songs"
      :key="i.id"
      :id="i.id"
      :index="index + 1"
      :music-name="i.name"
      :author="i.song.artists[0].name"
      :music-length="i.song.duration"
      @click="playMusic(i.id)"
    ></Song>
  </scrollbar>
</template>

<style lang="less" scoped>
h2 {
  color: rgba(25, 31, 53, 1);
  letter-spacing: 0.2px;
  font-size: 18px;
  line-height: 28px;
}
</style>