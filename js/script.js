let buttonElement = document.querySelector(".js-header__button");
let body = document.querySelector(".body");
let themName = document.querySelector(".themName");

buttonElement.addEventListener("click", () => {
    body.classList.toggle("body__backgroundImage");


    themName.innerText = body.classList.contains("body__backgroundImage") ? "Zmień" : "Przywróć";
});

