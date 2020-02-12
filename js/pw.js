

document.onkeydown = enter;
function enter(e) {
    if (e.keyCode == 13) {
        checkPswd();
    }
}

function checkPswd() {
    event.preventDefault();
    var confirmPassword = "hwlaw";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         window.open("work.html","_self");
    }
    else{
        alert("Invalid password, please try again.");
    }
}

