/**
 * Created by liangcong on 2017/8/11.
 */
$('#login-button').click(function (event) {
    var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
    if(userName=="Mother" &&  pwd=="Iloveyou"){
        event.preventDefault();
        $('form').fadeOut(500);
        $('.title').html(userName+' Happy Birthday!')
        $('.wrapper').addClass('form-success');
        setTimeout(function(){location.href="Happy Birthday.html";},2000);
    }
    else{
        alert("Wrong Password");
    }
});
