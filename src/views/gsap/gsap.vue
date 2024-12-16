<template>
    <div class="section" @click="toggleTimeline">
        <div class="box green"></div>
        <div class="box purple"></div>
        <div class="box orange"></div>
        <div class="box purple"></div>
        <div class="box green"></div>
        <div class="box green"></div>
        <div class="box purple"></div>
        <div class="box orange"></div>
        <div class="box purple"></div>
        <div class="box green"></div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
    // 使用rotate而不是rotation，并且增加动画的重复和yoyo效果
    gsap.to(".box", {
        duration: 0.5,
        opacity: 1,
        delay: 0.5,
        stagger: 0.1,
        ease: "back.in",
    });
});
function toggleTimeline() {
    gsap.to(".box", {
        duration: 0.5,
        opacity: 0,
        y: -100,
        stagger: 0.1,
        ease: "back.in"
    });
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
    top: 0;
    width: 100%;
    text-align: center;
}

.box {
    cursor: pointer;
    opacity: 0;
}
</style>