export default class {
  play() {
    this.ctx.play()
  }
  pause() {
    this.ctx.pause()
  }
  ctx: HTMLAudioElement
  constructor() {
    this.ctx = document.createElement('audio')
  }
}