<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr('href', "/images/sao-16x16.png");
        document.title = 'w(?Д?)w 页面崩溃啦!  ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="shortcut icon"]').attr('href', "/images/sao-16x16.png");
        document.title = '?(^?^*) 咦? 又好了! ';
        titleTime = setTimeout(function () {
            document.title = '(⊙﹏⊙)啊嘞, 原标题是啥来着?  ';
        }, 2000);
		
		titleTime = setTimeout(function () {
            document.title = 'q(≧▽≦q)哦~! 想起来了!  ';
        }, 4000);
		
		titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 6000);
    }
});
