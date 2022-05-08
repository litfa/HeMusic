import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router'
import 'element-plus/dist/index.css'
import '@/assets/style/main.less'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
