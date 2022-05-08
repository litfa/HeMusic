import { defineStore } from 'pinia'

export const useMusicStore = defineStore('music', {
  state: () => {
    return {
      list: [

      ]
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setMusicList(list: []) {
      this.list = list
    },
    addMusic(data: []) {
      this.list = { ...this.list, ...data }
    }
  }
})