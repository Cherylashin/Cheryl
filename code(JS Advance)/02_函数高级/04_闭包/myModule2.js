// 匿名函数自调用
(function (window){
    var msg = 'My Atguigu';
    function doSomething(){
        console.log('doSomething()' + msg.toUpperCase());
    }
    function doOtherthing(){
        console.log('doOtherthing()' + msg.toLowerCase());
    }

    // 向外暴露对象（给外部使用的方法）
    window.myModule2 = {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
})(window)

