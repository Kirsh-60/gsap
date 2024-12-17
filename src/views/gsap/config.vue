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
        <h3 @click="reverse">反方向</h3>
        <h3 @click="restart">重置</h3>
    </div>
    <div v-if="activeTab == 1" class="section">
        <div id="logo" class="flair">
        </div>
    </div>
    <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import gsap from 'gsap';

const activeTab = ref(1);
const data = reactive({
    taskList: [
        { index: 1, taskName: '①控制动画', active: true },
        { index: 2, taskName: '②动画事件', active: false },
    ]
});
const isStart = ref(true);
const isStop = ref(true);
let tween; // 创建一个Timeline类型的实例
const code = ref('')
const tabCode = () => {
    if (activeTab.value === 1) {
        code.value = `
        // 通过一个变量保存对Tween或者Timeline实例的引用
let tween = gsap.to("#logo", {duration: 1, x: 100});

// 暂停
tween.pause();

// 恢复（继续）
tween.resume();

// 反向变化
tween.reverse();

// 直接切换到整个动画变化时长的0.5秒的时间点的状态
tween.seek(0.5);

// 直接切换到整个变化过程的1/4的节点的状态
tween.progress(0.25);

// 让运动减速到0.5倍
tween.timeScale(0.5);

// 让变化加速到原来的2倍
tween.timeScale(2);

// 直接销毁tween实例，让垃圾回收机制可以处理该实例所占用的内存
tween.kill();
        `
    } else if (activeTab.value === 2) {
        code.value = `
动画事件  Callbacks
如果你需要知道动画是什么启动的，或者是在动画的某个时机执行一些代码，那么你可以使用动画事件。所有的Tween和timelines都有这些事件。

onComplete：动画结束时触发

onStart：动画开始时触发

onUpdate：只要动画运行，每一帧都会触发（元素有属性变化时）

onRepeat：每次动画重复时触发

onReverseComplete：当动画反向执行后运动到变化起始点时触发
gsap.to(".class", {
  duration: 1, 
  x: 100, 
  onComplete: () => console.log("the tween is complete")
}


gsap.timeline({onComplete: tlComplete}); 

function tlComplete() {
  console.log("the tl is complete");
  // 更多代码
}
        `
    }
}
onMounted(() => {
    // 初始化 tween
    tween = gsap.timeline();
    tabCode()
});
function selectTab(item) {
    data.taskList.forEach((item) => (item.active = false));
    item.active = true;
    activeTab.value = item.index;
    // 停止所有动画并清理
    tween.kill();
    isStart.value = true
    tabCode()
}
// 依次执行动画
function animation1() {
    isStart.value = false;
    tween = gsap.to("#logo", { duration: 1, x: '60vw', duration: 2,rotate: 360 });
}
function animation2() {
    isStart.value = false;
}
function start() {
    if (activeTab.value === 1) {
        animation1();
    } else if (activeTab.value === 2) {
        animation2();
    }
}

function pause() {
    isStop.value = !isStop.value;
    tween.pause(); // 暂停动画
}

function resume() {
    isStop.value = !isStop.value;
    tween.play(); // 继续动画
}

function reverse() {
    tween.reverse(); // 反方向动画
}
function restart() {
    tween.restart(); // 重置动画
}

onUnmounted(() => {
    // 停止所有动画并清理
    tween.kill()
});
</script>

<style scoped>
image {
    width: 100%;
    height: 100%;
}

body {
    overflow: hidden;
}

.flair {
    width: 100px;
    height: 100px;
    background: url('https://assets.codepen.io/16327/flair-25.png') center no-repeat;
    background-size: cover;
    /* 添加此属性以使背景图片自适应宽高 */
    background-origin: border-box;
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
</style>
