{

    const backgroundToggle = () => {
        const container = document.querySelector(".container");
        const themName = document.querySelector(".themName");
        container.classList.toggle("container__backgroundImage");
        themName.innerText = container.classList.contains("container__backgroundImage") ? "Zmień" : "Przywróć";


    };
    const init = () => {
        const buttonElement = document.querySelector(".js-header__button");

        buttonElement.addEventListener("click", backgroundToggle);

    }
    init();
}




