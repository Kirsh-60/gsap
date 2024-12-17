<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
// 定义一个响应式变量来存储是否是首页的状态
const isHomePage = ref(route.path === '/');
onMounted(() => {
  console.log(route.path, 'path')
})
// 监听路由变化
watch(route, (newRoute) => {
  isHomePage.value = newRoute.path === '/';
});
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="container">
    <div v-if="isHomePage" class="back homeBtn">首页</div>
    <div v-else class="back homeBtn" @click="goHome">←back</div>
    <router-view />
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  padding: 20px;
  overflow: hidden;
  box-sizing: border-box;
}

.back {
  border: 1px solid #fff;
  width: 75px;
  text-align: center;
}

.homeBtn {
  cursor: pointer;
  opacity: 1;
}
</style>
<style scoped lang="scss">
/* 语法高亮 */
.hljs-container {
    position: relative;
    display: block;
    width: 600px;
    padding: 30px 5px 2px;
    overflow-x: hidden;
    line-height: 20px;
    text-align: left;
    background: #21252b;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 40%);
}

/** 3个点 */
.hljs-container::before {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 12px;
    height: 12px;
    overflow: visible;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    white-space: nowrap;
    text-indent: 75px;
    background-color: #fc625d;
    border-radius: 16px;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    content: attr(codetype);
}

/** 滚动条 */
:deep(.hljs) {
    overflow-x: auto;
}

:deep(.hljs::-webkit-scrollbar) {
    width: 12px !important;
    height: 12px !important;
}

:deep(.hljs::-webkit-scrollbar-thumb) {
    height: 30px !important;
    background: #d1d8e6;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 19px;
    opacity: 0.8;
}

:deep(.hljs::-webkit-scrollbar-thumb:hover) {
    background: #a5b3cf;
    background-clip: content-box;
    border: 2px solid transparent;
}

:deep(.hljs::-webkit-scrollbar-track-piece) {
    width: 30px;
    height: 30px;
    background: #333;
}

::-webkit-scrollbar-button {
    display: none;
}
</style>