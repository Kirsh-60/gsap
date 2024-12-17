<template>
    <div>
        <h3 class="homeBtn" @click="toggleTimeline('/gsap')">动画stagger</h3>
        <h3 class="homeBtn" @click="toggleTimeline('/Timelines')">时间线Timelines</h3>
        <h3 class="homeBtn" @click="toggleTimeline('/config')">控制器&动画事件</h3>
        <h3 class="homeBtn" @click="toggleTimeline('/plugins')">插件Plugins</h3>
        <h3 class="homeBtn" @click="jumpTo('https://gsap.framer.wiki/')">学习网址</h3>
        <h3 class="homeBtn" @click="jumpTo('https://github.com/Kirsh-60/gsap')">源码网址</h3>
        <div>
    </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

import { useRouter } from 'vue-router';
const router = useRouter();

function toggleTimeline(route) {
    router.push(route)
}
function jumpTo(url) {
    window.open(url)
}
</script>

<style scoped>
h3 {
    text-align: center;
    border: 1px solid #fff;
    padding: 10px;
}

.homeBtn {
    cursor: pointer;
    opacity: 1;
}
</style>