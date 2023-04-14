import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/style/index.scss'
import Mui from '@/components/index'
createApp(App).use(store).use(Mui).use(router).mount('#app')
