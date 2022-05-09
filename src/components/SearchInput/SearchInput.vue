<script lang="ts" setup>
import { Search } from '@icon-park/vue-next'
import { ref, onUnmounted } from 'vue'
import { suggest } from '@/apis/search'
import Scrollbar from '../Scrollbar/Scrollbar.vue'
const open = ref(false)

const input = () => {
  open.value = true
  getSuggest()
}

const close = () => {
  open.value = false
}
document.body.addEventListener('click', close)
onUnmounted(() => {
  document.body.removeEventListener('click', close)
})

const keywords = ref('')
const results = ref([])
let timeout = setTimeout(() => { /**/ })

const getSuggest = () => {
  clearTimeout(timeout)
  timeout = setTimeout(async () => {
    const { data: res } = await suggest(keywords.value)
    results.value = res.result.songs
  }, 500)
}
</script>

<template>
  <div class="search-input">
    <search class="search" theme="outline" size="20" fill="rgba(17, 93, 239, 1)" />
    <input
      type="text"
      placeholder="搜索"
      v-model="keywords"
      @input.stop="input"
      @click.stop="input"
      @keypress.enter="$router.push(`/search?keywords=${keywords}`)"
    />
    <div class="results" :class="{ open }">
      <Scrollbar>
        <span
          v-for="i in results"
          :key="i.id"
          @click="$router.push(`/search?keywords=${i.name}`)"
        >{{ i.name }}</span>
      </Scrollbar>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-input {
  width: 256px;
  height: 40px;
  background: rgba(255, 255, 255, 0.5);
  // background: red;
  background-blend-mode: normal;
  border-radius: 12px;
  display: flex;
  align-items: center;
  position: relative;
  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding-left: 1em;
    box-sizing: border-box;
    border-radius: 12px;
  }
  .search {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  .results {
    position: absolute;
    top: 45px;
    height: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.2s;
    display: flex;
    overflow-x: hidden;
    .scrollbar {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    &.open {
      height: 100px;
    }
    span {
      width: 100%;
      margin: 5px 10px;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>