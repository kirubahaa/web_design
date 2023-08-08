let input = document.getElementById("inputs");
let in_val = input.value;
let forms = document.getElementById("glow");

document.getElementById("but").onclick = function () {
    location.href = "html1.html";
};

const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

function validate() {
    if ((input.value).match(regex)) {
        forms.classList.add("valid");
        forms.classList.remove("invalid");
    }else {
        forms.classList.add("invalid");
        forms.classList.remove("valid");
    }
}

input.addEventListener("keyup",validate);