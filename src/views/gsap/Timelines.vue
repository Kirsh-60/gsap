<template>
    <div class="btnList">
        <h3 v-for="item in data.taskList" :key="item.taskName" :class="{ active: item.active }"
            @click="selectTab(item)">
            {{ item.taskName }}
        </h3>
    </div>
    <div class="btnList">
        <h3 v-if="isStart" @click="start">开始</h3>
        <h3 v-if="isStop" @click="pause">暂停</h3>
        <h3 v-else @click="resume">继续</h3>
        <h3 @click="restart">重置</h3>
    </div>
    <div v-if="activeTab == 1" class="section">
        <div class="box green"></div>
        <div class="box purple"></div>
        <div class="box orange"></div>
    </div>
    <div v-if="activeTab == 2" class="section">
        <div class="box green2"></div>
        <div class="box purple2"></div>
        <div class="box orange2"></div>
    </div>
    <div v-if="activeTab == 3" class="section">
        <div class="box green3"></div>
        <div class="box purple3"></div>
        <div class="box orange3"></div>
    </div>
    <div v-if="activeTab == 4" class="section">
        <div class="box green4"></div>
        <div class="box purple4"></div>
        <div class="box orange4"></div>
    </div>
    <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import gsap from 'gsap';

const activeTab = ref(1);
const data = reactive({
    taskList: [
        { index: 1, taskName: '①依次顺序', active: true },
        { index: 2, taskName: '②间隔停顿', active: false },
        { index: 3, taskName: '③位置参数', active: false },
        { index: 4, taskName: '④特殊属性', active: false },
    ]
});
const isStart = ref(true);
const isStop = ref(true);
let tl; // 创建一个Timeline类型的实例
const code = ref('')
const tabCode = () => {
    if (activeTab.value === 1) {
        code.value = `
            import gsap from 'gsap';
             <div v-if="activeTab == 1" class="section">
                 <div class="box green"></div>
                 <div class="box purple"></div>
                 <div class="box orange"></div>
             </div>// 依次执行动画
            function animation1() {
                isStart.value = false;
                tl = gsap.timeline({
                    onComplete: () => {
                        console.log("所有动画已完成");
                        // 在这里添加动画结束后要执行的代码
                    }
                }) // 确保每次调用animation时都重新创建timeline
                    .to(".green", { x: '50vw', duration: 2 })
                    .to(".purple", { x: '50vw', duration: 1 })
                    .to(".orange", { x: '50vw', duration: 1 });
             }`
    } else if (activeTab.value === 2) {
        code.value = `
           // 间隔停顿动画
            function animation2() {
                isStart.value = false;
                tl = gsap.timeline({
                    onComplete: () => {
                        console.log("所有动画已完成");
                        // 在这里添加动画结束后要执行的代码
                    }
                }) // 确保每次调用animation时都重新创建timeline
                    .to(".green", { x: '50vw', duration: 2 })
                    .to(".purple", { x: '50vw', duration: 1, delay: 2 })
                    .to(".orange", { x: '50vw', duration: 1 });
            }`
    } else if (activeTab.value === 3) {
        code.value = `
            // 位置参数
            function animation3() {
                isStart.value = false;
                tl = gsap.timeline({
                    onComplete: () => {
                        console.log("所有动画已完成");
                        // 在这里添加动画结束后要执行的代码
                    }
                }) // 确保每次调用animation时都重新创建timeline
                // 绿色方块会在整个时间线开始1秒后进行移动
                tl.to(".green3", { x: '50vw', duration: 2 }, 1);

                // 紫色方块会和之前一个添加的动画同时开始运动
                tl.to(".purple3", { x: '50vw', duration: 1 }, "<");

                // 橘色方块会在之前所有动画都结束一秒后再开始运动
                tl.to(".orange3", { x: '50vw', duration: 1 }, "+=1");
            }`
    } else if (activeTab.value === 4) {
        code.value = `
       function animation4() {
            isStart.value = false;
            let tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: false })

            tl.to(".green4", { rotation: 360, duration: 2, ease: "bounce.out" });
            tl.to(".purple4", { rotation: 360, duration: 2, ease: "bounce.out" });
            tl.to(".orange4", { rotation: 360, duration: 2, ease: "bounce.out" });
        }`
    } 
}
onMounted(() => {
    // 初始化 tl
    tl = gsap.timeline();
    tabCode()
});
function selectTab(item) {
    data.taskList.forEach((item) => (item.active = false));
    item.active = true;
    activeTab.value = item.index;
    // 停止所有动画并清理
    gsap.killTweensOf(['.green', '.purple', '.orange']);
    isStart.value = true
    tabCode()
}
// 依次执行动画
function animation1() {
    isStart.value = false;
    tl = gsap.timeline({
        onComplete: () => {
            console.log("所有动画已完成");
            // 在这里添加动画结束后要执行的代码
        }
    }) // 确保每次调用animation时都重新创建timeline
        .to(".green", { x: '50vw', duration: 2 })
        .to(".purple", { x: '50vw', duration: 1 })
        .to(".orange", { x: '50vw', duration: 1 });
}
function animation2() {
    isStart.value = false;
    tl = gsap.timeline({
        onComplete: () => {
            console.log("所有动画已完成");
            // 在这里添加动画结束后要执行的代码
        }
    }) // 确保每次调用animation时都重新创建timeline
        .to(".green2", { x: '50vw', duration: 2 })
        .to(".purple2", { x: '50vw', duration: 1, delay: 2 })
        .to(".orange2", { x: '50vw', duration: 1 });
}

function animation3() {
    isStart.value = false;
    tl = gsap.timeline({
        onComplete: () => {
            console.log("所有动画已完成");
            // 在这里添加动画结束后要执行的代码
        }
    }) // 确保每次调用animation时都重新创建timeline
    // 绿色方块会在整个时间线开始1秒后进行移动
    tl.to(".green3", { x: '50vw', duration: 2 }, 1);

    // 紫色方块会和之前一个添加的动画同时开始运动
    tl.to(".purple3", { x: '50vw', duration: 1 }, "<");

    // 橘色方块会在之前所有动画都结束一秒后再开始运动
    tl.to(".orange3", { x: '50vw', duration: 1 }, "+=1");
}
function animation4() {
    isStart.value = false;
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: false })

    tl.to(".green4", { rotation: 360, duration: 2, ease: "bounce.out" });
    tl.to(".purple4", { rotation: 360, duration: 2, ease: "bounce.out" });
    tl.to(".orange4", { rotation: 360, duration: 2, ease: "bounce.out" });
}

function start() {
    if (activeTab.value === 1) {
        animation1();
    } else if (activeTab.value === 2) {
        animation2();
    } else if (activeTab.value === 3) {
        animation3();
    } else if (activeTab.value === 4) {
        animation4();
    }
}

function pause() {
    isStop.value = !isStop.value;
    tl.pause(); // 暂停动画
}

function resume() {
    isStop.value = !isStop.value;
    tl.play(); // 继续动画
}

function restart() {
    tl.restart(); // 重置动画
}

onUnmounted(() => {
    // 停止所有动画并清理
    tl.kill()
});
</script>

<style scoped>
body {
    overflow: hidden;
}

.section {}

.btnList {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #fff;
    cursor: pointer;
}

h3 {
    text-align: center;
    border: 1px solid #fff;
    width: 200px;
    transition: background-color 0.3s, color 0.3s;
    /* 添加过渡效果 */
}

h3:hover {
    background-color: #fff;
    color: black;
}

h3:active {
    background-color: #fff;
    color: black;
}

h3.active {
    background-color: #fff;
    /* 高亮背景颜色 */
    color: black;
    /* 高亮文字颜色 */
}

.green2 {
    background: #00ff00;
}

.purple2 {
    background: #ff00ff;
}

.orange2 {
    background: #ffa500;
}

.green3 {
    background: #00ff00;
}

.purple3 {
    background: #ff00ff;
}

.orange3 {
    background: #ffa500;
}

.green4 {
    background: #00ff00;
}

.purple4 {
    background: #ff00ff;
}

.orange4 {
    background: #ffa500;
}
</style>