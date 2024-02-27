const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var use = document.getElementById('user').value;
    var pass = document.getElementById('Pass').value;

    var verify = check(use, pass);
    if (verify == true) {
        alert("Login!");
        window.location.href = "demo.html";
    } else {
        alert("Wrong email or password!");
    }

});
function check(use, pass) {

    if (use == "rishi123@gmail.com" && pass == "12345") {
        return true;
    } else {
        return false;
    }
};

