import { defineStore } from 'pinia'

export const useMusicStore = defineStore('music', {
  state: () => {
    return {
      list: [
        // 'http://m8.music.126.net/20220508170525/10356f47bccb1d83cbf663e8d83e6a36/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3'
      ],
      index: 0

    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setMusicList(list: any[]) {
      this.list = list
    },
    addMusic(data: any[]) {
      this.list = { ...this.list, ...data }
    },
    play(data: { index?, id?}) {
      if (data.index) this.index = data.index
      if (data.id) this.index = this.list.findIndex(e => {
        return e.id == data.id
      })
    }
  }
})