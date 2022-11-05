<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\css\APlayer.min.css"><script src="\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\js\Meting.min.js"></script>(function() {
    var a_idx = 0;
    window.onclick = function(event) {
            var a = new Array("摆烂", "摆烂", "奋斗", "躺平", "努力", "躺平");

            var heart = document.createElement("b"); //创建b元素
            heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

            document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
            a_idx = (a_idx + 1) % a.length;
            heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

            var f = 10, // 字体大小
                x = event.clientX - f / 2, // 横坐标
                y = event.clientY - f, // 纵坐标
                c = randomColor(), // 随机颜色
                a = 0.8, // 透明度
                s = 0.8; // 放大缩小

            var timer = setInterval(function() { //添加定时器
                if (a 