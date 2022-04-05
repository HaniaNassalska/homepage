let buttonElement = document.querySelector(".js-header__button");
let body = document.querySelector(".body");
let themName = document.querySelector(".themName");

buttonElement.addEventListener("click", () => {
    body.classList.toggle("body__backgroundImage");
    body.classList.toggle("body__whiteBackground");


    themName.innerText = body.classList.contains("body__whiteBackground") ? "Przywróć" : "Zmień";
});

