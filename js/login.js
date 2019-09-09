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

//導入AJAX撈取資料，確定是否登入成功

function Login(e){
    e.preventDefault();
    let xhr=new XMLHttpRequest();
    let Email=document.querySelector('.login-form-email').value;
    let Password=document.querySelector('.login-form-password').value;
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send(`email=${Email}&password=${Password}`);
    xhr.onload=function(){
        let callbackdata=JSON.parse(xhr.responseText);
        if(callbackdata.message==="登入成功"){
            alert('登入成功!!!')
        }else{
            alert(callbackdata.message);
        }
    }
}


document.querySelector('.login-btn').addEventListener('click',Login,false);
