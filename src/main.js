import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// highlight 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

//注册组件

createApp(App).use(router).use(hljsVuePlugin).mount('#app')
