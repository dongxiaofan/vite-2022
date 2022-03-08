import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import '@/assets/styles/index.less'
import '@/assets/fonts/iconfont.css'

const app = createApp(App)

// 使用antd
app.use(Antd)

// 使用vuex
app.use(store)

// 使用路由
app.use(router)

router.isReady().then(() => app.mount('#app'))

