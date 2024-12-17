import{g as m}from"./index-DjKJqAo0.js";import{_ as N,r,f as L,b as T,d as j,c as t,a as s,F as f,g as B,h as k,i as V,j as E,o as a,n as F,t as R}from"./index-BCXd1NW_.js";const U={class:"btnList"},z=["onClick"],D={class:"btnList"},I={key:0,class:"section"},J={__name:"config",setup(M){const n=r(1),d=L({taskList:[{index:1,taskName:"①控制动画",active:!0},{index:2,taskName:"②动画事件",active:!1}]}),l=r(!0),o=r(!0);let e;const u=r(""),p=()=>{n.value===1?u.value=`
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
        `:n.value===2&&(u.value=`
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
        `)};T(()=>{e=m.timeline(),p()});function g(v){d.taskList.forEach(i=>i.active=!1),v.active=!0,n.value=v.index,e.kill(),l.value=!0,p()}function _(){l.value=!1,e=m.to("#logo",{duration:1,x:"60vw",duration:2,rotate:360})}function h(){l.value=!1}function C(){n.value===1?_():n.value===2&&h()}function w(){o.value=!o.value,e.pause()}function x(){o.value=!o.value,e.play()}function S(){e.reverse()}function b(){e.restart()}return j(()=>{e.kill()}),(v,i)=>{const y=E("highlightjs");return a(),t(f,null,[s("div",U,[(a(!0),t(f,null,B(d.taskList,c=>(a(),t("h3",{key:c.taskName,class:F({active:c.active}),onClick:W=>g(c)},R(c.taskName),11,z))),128))]),s("div",D,[l.value?(a(),t("h3",{key:0,onClick:C},"开始")):k("",!0),o.value?(a(),t("h3",{key:1,onClick:w},"暂停")):(a(),t("h3",{key:2,onClick:x},"继续")),s("h3",{onClick:S},"反方向"),s("h3",{onClick:b},"重置")]),n.value==1?(a(),t("div",I,i[0]||(i[0]=[s("div",{id:"logo",class:"flair"},null,-1)]))):k("",!0),V(y,{language:"JavaScript",autodetect:!1,code:u.value},null,8,["code"])],64)}}},A=N(J,[["__scopeId","data-v-36b93673"]]);export{A as default};
