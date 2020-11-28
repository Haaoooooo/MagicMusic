//手机号
var phoneStr = /^1[3|4|5|7|8][0-9]{9}$/;
//密码
var passwordStr = /^[0-9a-zA-Z_]{6,12}$/;
//数字验证
var num = /^\d[0-9]{2}\d$/g; 


$('.phone input').on('blur',function(){
    if( phoneStr.test($('.phone input').val()) == false){
        $('.phone > span').show();
    }else{
        $('.phone > span').hide();
    }
});

$('.verify input').on('blur',function(){
    if( num.test($('.verify input').val()) == false){
        $('.verify > span').show();
    }else{
        $('.verify > span').hide();
    }
});

$('.pwd input').on('blur',function(){
    if( passwordStr.test($('.pwd input').val()) == false){
        $('.pwd > span').show();
    }else{
        $('.pwd > span').hide();
    }
});

$('.submit > span').on('click',function(){
    var phoneNumber = $('.phone input').val();
    var password=$('.pwd input').val();
    $.ajax({
        type:"post",
        url: "http://192.168.1.94:3000/users",
        data: "type=register&phone=" + phoneNumber + "&pass=" + password,
        success: function(res){
                console.log(res);
                 if(res.ok == true){
                     window.location.href = './login.html';
                 }else{
                     alert(res.msg);
                 }
        }   
    });
 });