document.onkeypress = enter;
function enter(e) {
    if (e.keyCode == 13) {
        checkPswd();
    }
}

function checkPswd() {
    var confirmPassword = "1234";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         window.open("5indeskset.html");
    }
    else{
        alert("Invalid password, please try again.");
    }
}
