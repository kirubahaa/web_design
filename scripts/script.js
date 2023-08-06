let user_in = document.getElementById("user");
let user_pass = document.getElementById("one");
let btn = document.getElementById("login_button");
let text = document.getElementsByClassName("spans");
let icon = document.getElementById("icon");


function go() {
    if ((user_in.value).length > 5 && (user_pass.value).length >= 8) {console.log("Valid Password");}
    else {
        text[1].setAttribute("style", "color: #f00; animation: shake 0.2s ease-in-out 1;");
        text[0].setAttribute("style", "color: #f00; animation: shake 0.2s ease-in-out 1;");
        user_pass.setAttribute("style", "border: 2px solid #f00;");
        user_in.setAttribute("style", "border: 2px solid #f00;");
        user_pass.value = "";
        user_in.value = "";
    }
}


btn.addEventListener("click", go);

user_in.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        user_pass.focus();
        user_pass.select();
    }
});

user_pass.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        go();
    }
});

user_pass.addEventListener("click", () => {text[1].setAttribute("style", "color: rgba(0, 255, 255, 0.733);");});
user_pass.addEventListener("click", () => {user_pass.setAttribute("style", "border: 2px solid #2c5d96;");});

user_in.addEventListener("click", () => {text[0].setAttribute("style", "color: rgba(0, 255, 255, 0.733);");});
user_in.addEventListener("click", () => {user_in.setAttribute("style", "border: 2px solid #2c5d96;");});

icon.addEventListener("click", () => {
    const curr = user_pass.type;
    if (curr == "text") {
        user_pass.type = "password"
        icon.className = "fa-regular fa-eye-slash";
    }
    else {
        user_pass.type = "text"
        icon.className = "fa-solid fa-eye";
    }
});