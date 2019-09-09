
$(document).ready(function () {
    //點擊漢堡icon觸發新增class事件
    $('.hamburger').click(function (e) { 
        e.preventDefault();
        $('.topmenu').toggleClass('topmenu-show');
        
    });
    //點擊愛心改變fontawesome的class使其變成實心
    $('.heart1').click(function (e) { 
        e.preventDefault();
        $('.heart1 i').toggleClass('fas');
        
    });
    $('.heart2').click(function (e) { 
        e.preventDefault();
        $('.heart2 i').toggleClass('fas');
        
    });
    $('.heart3').click(function (e) { 
        e.preventDefault();
        $('.heart3 i').toggleClass('fas');
        
    });
    $('.heart4').click(function (e) { 
        e.preventDefault();
        $('.heart4 i').toggleClass('fas');
        
    });
     ///點擊 arrow icon觸發回到頂部效果
     $('.gototop').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0},500);
    });
});