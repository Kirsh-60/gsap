<template>
    <div class="content">
        <h1>scroll down</h1>
        <div class="box green"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import gsap from 'gsap';
onMounted(() => {
    gsap.to(".green", {
        rotation: 900,
        duration: 1,
        scrollTrigger: {
            trigger: '.box',
            scrub: 2,
            markers: true,
        }
    });
});
</script>

<style lang="scss" scoped>
/* Global styles come from external css https://codepen.io/GreenSock/pen/gOWxmWG */
.content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 200vh !important;
    margin: 0;
}

.box {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
}

h1 {
    position: fixed;
    width: 100%;
    text-align: center;
    top: 0;
}
</style>
