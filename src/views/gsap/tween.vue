<template>
    <div class="box"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
const main = ref();
let tl;
let ctx;
onMounted(() => {
    ctx = gsap.context((self) => {
        const boxes = gsap.utils.toArray('.box');
        tl = gsap
            .timeline()
            .to(boxes[0], { x: 120, rotation: 360 })
            .to(boxes[1], { x: -120, rotation: -360 }, '<')
            .to(boxes[2], { y: -166 })
            .reverse();
    }, main.value); // <- Scope!
});;
</script>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: #fff;
}
</style>
