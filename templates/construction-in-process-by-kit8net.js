// 27330-construction-in-process-by-kit8net.js
import lottie from "https://cdn.skypack.dev/lottie-web";
import animationJsonData from "../jsonData/27330-construction-in-process-by-kit8net.js";
import createDom from './createDom.js'

// 创建容器
const ID = createDom({});

// 初始化
const lot = lottie.loadAnimation({
    container: document.getElementById(ID),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    animationData: animationJsonData,
});
// 开始播放动画
lot.play();
