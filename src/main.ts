import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router'
import 'element-plus/dist/index.css'
import '@/assets/style/main.less'

createApp(App).use(router).mount('#app')
