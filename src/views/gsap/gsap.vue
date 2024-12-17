<template>
    <h3 @click="toggleTimeline">点击动画{{ isOpen ? '开始' : '关闭' }}</h3>
    <div class="section">
        <div class="box green"></div>
        <div class="box purple"></div>
        <div class="box orange"></div>
        <div class="box purple"></div>
        <div class="box green"></div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const isOpen = ref(false);

onMounted(() => {
    // 使用rotate而不是rotation，并且增加动画的重复和yoyo效果
    toggleIn();
});
function toggleIn() {
    gsap.to(".box", {
        duration: 0.5,
        opacity: 1,
        delay: 0.5,
        y: 0,
        stagger: 0.1,
        ease: "back.in",
    });
}
function toggleOut() {
    gsap.to(".box", {
        duration: 0.5,
        opacity: 0,
        y: -100,
        stagger: 0.1,
        ease: "back.in"
    });
}
function toggleTimeline() {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
        toggleOut();
    } else {
        toggleIn();
    }
}
onUnmounted(() => {
    // 停止所有动画并清理
    gsap.killTweensOf('.box');
});
</script>

<style scoped>
body {
    overflow: hidden;
}

.section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    height: 100vh;
}

h3 {
    position: fixed;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    border: 1px solid #fff;
    width: 200px;
}

.box {
    cursor: pointer;
    opacity: 0;
}
</style>