/**
 * Created by liangcong on 2017/8/11.
 */
$('#login-button').click(function (event) {
    var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
    if(userName=="老妈" &&  pwd=="666666"){
        event.preventDefault();
        $('form').fadeOut(500);
        $('.title').html(userName+' Happy Birthday!')
        $('.wrapper').addClass('form-success');
        setTimeout(function(){location.href="Happy Birthday.html";},2000);
    }else if(userName=="王慧宁" &&  pwd=="666666"){
        event.preventDefault();
        $('form').fadeOut(500);
        $('.title').html(userName+' Happy Birthday!');
        $('.wrapper').addClass('form-success');
        setTimeout(function(){location.href="HappyBirthday-1.html";},2000);
    }
    else{
        alert("Wrong Password");
    }
});
