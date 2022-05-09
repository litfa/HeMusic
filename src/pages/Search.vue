<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { Search } from '@icon-park/vue-next'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import searchApi from '@/apis/search'
import Song from '@/components/Song/Song.vue'
import Scrollbar from '@/components/Scrollbar/Scrollbar.vue'
import { useMusicStore } from '@/config/store'
const route = useRoute()
const router = useRouter()
const music = useMusicStore()

const results = ref([])
const keywords = ref(route.query.keywords as string || '')

const search = async () => {
  const { data: res } = await searchApi(route.query.keywords as string)
  results.value = res.result.songs
}

watch(() => route.query.keywords, () => search(), { immediate: true })

const play = (e) => {
  music.addMusic([e])
  music.play({ id: e.id })
}
</script>

<template>
  <div class="search">
    <el-input v-model="keywords" @keydown.enter="$router.push(`/search?keywords=${keywords}`)">
      <template #suffix>
        <Search></Search>
      </template>
    </el-input>
    <scrollbar>
      <div class="results">
        <Song
          v-for="(i, index) in results"
          :key="i.id"
          :index="index + 1"
          :music-name="i.name"
          :author="i.ar[0].name"
          :music-length="i.dt"
          style="width: 70%;"
          @click="play(i)"
        ></Song>
      </div>
    </scrollbar>
  </div>
</template>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;
  .el-input {
    width: 70%;
    height: 40px;
  }
}
</style>