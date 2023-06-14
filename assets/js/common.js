//see login -register in click user-icon
let userIcon = document.querySelector(".user-icon");
let loginRegister = document.querySelector(".login-register");
userIcon.addEventListener("click", function () {
    loginRegister.classList.remove("d-none")
    document.getElementById("overlay").style.display = "block"
})

//area kenarina toxunanda hemin hissenin silinmesi

document.addEventListener("click", function (e) {
    if (!!!e.target.closest(".user-icon")) {
        if (!$(".login-register").hasClass("d-none")) {
            $(".login-register").addClass("d-none")
        }
    }
})



