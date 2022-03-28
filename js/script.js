let buttonElement = document.querySelector(".js-header__button");
let container = document.querySelector(".container");
let body = document.querySelector(".body");
let themName = document.querySelector(".themName");

buttonElement.addEventListener("click", () => {
    container.classList.toggle("container__whiteBackground");
    body.classList.toggle("body__blueBackground");

    themName.innerText = body.classList.contains("body__blueBackground") ? "Przywróć" : "Zmień";
});

