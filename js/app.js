function auth()
{
    var us = document.forms['myForm']['uname'].value;
    var pa = document.forms['myForm']['pname'].value;

    if(us == 'TaylorPortfolio' && pa == 'jg!sNVd#e193d&g9d9ds')
    {
        window.location.href="main.html";
    }else{
        alert('Login Failed!');
        return;
    }
}
