import{g as u}from"./index-DjKJqAo0.js";import{_ as L,r as p,f as T,b as j,d as B,c as n,a as e,F as m,g as D,h as c,i as V,j as E,o as l,n as F,t as z}from"./index-BCXd1NW_.js";const I={class:"btnList"},J=["onClick"],M={class:"btnList"},O={key:0,class:"section"},U={key:1,class:"section"},W={key:2,class:"section"},$={key:3,class:"section"},q={__name:"Timelines",setup(A){const t=p(1),g=T({taskList:[{index:1,taskName:"①依次顺序",active:!0},{index:2,taskName:"②间隔停顿",active:!1},{index:3,taskName:"③位置参数",active:!1},{index:4,taskName:"④特殊属性",active:!1}]}),s=p(!0),r=p(!0);let a;const v=p(""),f=()=>{t.value===1?v.value=`
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
             }`:t.value===2?v.value=`
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
            }`:t.value===3?v.value=`
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
            }`:t.value===4&&(v.value=`
       function animation4() {
            isStart.value = false;
            let tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: false })

            tl.to(".green4", { rotation: 360, duration: 2, ease: "bounce.out" });
            tl.to(".purple4", { rotation: 360, duration: 2, ease: "bounce.out" });
            tl.to(".orange4", { rotation: 360, duration: 2, ease: "bounce.out" });
        }`)};j(()=>{a=u.timeline(),f()});function x(i){g.taskList.forEach(o=>o.active=!1),i.active=!0,t.value=i.index,u.killTweensOf([".green",".purple",".orange"]),s.value=!0,f()}function b(){s.value=!1,a=u.timeline({onComplete:()=>{console.log("所有动画已完成")}}).to(".green",{x:"50vw",duration:2}).to(".purple",{x:"50vw",duration:1}).to(".orange",{x:"50vw",duration:1})}function k(){s.value=!1,a=u.timeline({onComplete:()=>{console.log("所有动画已完成")}}).to(".green2",{x:"50vw",duration:2}).to(".purple2",{x:"50vw",duration:1,delay:2}).to(".orange2",{x:"50vw",duration:1})}function _(){s.value=!1,a=u.timeline({onComplete:()=>{console.log("所有动画已完成")}}),a.to(".green3",{x:"50vw",duration:2},1),a.to(".purple3",{x:"50vw",duration:1},"<"),a.to(".orange3",{x:"50vw",duration:1},"+=1")}function w(){s.value=!1;let i=u.timeline({repeat:-1,repeatDelay:2,yoyo:!1});i.to(".green4",{rotation:360,duration:2,ease:"bounce.out"}),i.to(".purple4",{rotation:360,duration:2,ease:"bounce.out"}),i.to(".orange4",{rotation:360,duration:2,ease:"bounce.out"})}function y(){t.value===1?b():t.value===2?k():t.value===3?_():t.value===4&&w()}function C(){r.value=!r.value,a.pause()}function h(){r.value=!r.value,a.play()}function S(){a.restart()}return B(()=>{a.kill()}),(i,o)=>{const N=E("highlightjs");return l(),n(m,null,[e("div",I,[(l(!0),n(m,null,D(g.taskList,d=>(l(),n("h3",{key:d.taskName,class:F({active:d.active}),onClick:G=>x(d)},z(d.taskName),11,J))),128))]),e("div",M,[s.value?(l(),n("h3",{key:0,onClick:y},"开始")):c("",!0),r.value?(l(),n("h3",{key:1,onClick:C},"暂停")):(l(),n("h3",{key:2,onClick:h},"继续")),e("h3",{onClick:S},"重置")]),t.value==1?(l(),n("div",O,o[0]||(o[0]=[e("div",{class:"box green"},null,-1),e("div",{class:"box purple"},null,-1),e("div",{class:"box orange"},null,-1)]))):c("",!0),t.value==2?(l(),n("div",U,o[1]||(o[1]=[e("div",{class:"box green2"},null,-1),e("div",{class:"box purple2"},null,-1),e("div",{class:"box orange2"},null,-1)]))):c("",!0),t.value==3?(l(),n("div",W,o[2]||(o[2]=[e("div",{class:"box green3"},null,-1),e("div",{class:"box purple3"},null,-1),e("div",{class:"box orange3"},null,-1)]))):c("",!0),t.value==4?(l(),n("div",$,o[3]||(o[3]=[e("div",{class:"box green4"},null,-1),e("div",{class:"box purple4"},null,-1),e("div",{class:"box orange4"},null,-1)]))):c("",!0),V(N,{language:"JavaScript",autodetect:!1,code:v.value},null,8,["code"])],64)}}},P=L(q,[["__scopeId","data-v-4f5ffb14"]]);export{P as default};
