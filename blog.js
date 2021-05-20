function Login()
{
    var strEmail = document.getElementById("txtEmail").value;
    var strPassword = document.getElementById("txtPassword").value;

    if(strEmail =="admin@admin" && strPassword=="admin")
    {
        document.write("logged in");
        document.getElementsByClassName('visibility') = 'visible';
        window.location = "home-page.html";
    }
}
function signUp()
{
    window.alert("working");
}
