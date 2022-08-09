// 创建一个可以执行简单动画的函数
// obj 要执行动画的对象
// attr 要执行的动画的样式，比如：left top width height
// target 执行动画的目标位置
// speed 移动的速度
// callback 这个函数将会在动画执行完毕以后执行
var timer;
function move(obj, attr, target, speed, callback) {

    clearInterval(timer);
    // 当前位置
    var current = parseInt(getStyle(obj, attr));

    if (current > target) {
        speed = -speed;
    }

    // 向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));

        var newValue = oldValue + speed;

        obj.style[attr] = newValue + "px";

        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }

        if (newValue === target) {
            clearInterval(obj.timer);

            // 动画执行完毕执行回调函数callback
            callback && callback();
        }
    }, 30);
}



function getStyle(obj, name) {

    // 加window表示getComputedStyle是一个属性，不加是变量
    // 变量如果寻找不到会报错，属性寻找不到会返回false
    if (window.getComputedStyle) {
        // 正常浏览器
        return getComputedStyle(obj, null)[name];
    } else {
        // IE8
        return obj.currentStyle[name];
    }



}