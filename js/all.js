
$(document).ready(function () {
    //點擊漢堡icon觸發新增class事件
    $('.hamburger').click(function (e) { 
        e.preventDefault();
        $('.topmenu').toggleClass('topmenu-show');
        
    });
   ///點擊 arrow icon觸發回到頂部效果
    $('.gototop').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0},500);
    });
});

