
const updateActiveButton = (button) => {
    const buttons = document.querySelectorAll("[data-action]");
    buttons.forEach(button => {
        button.classList.remove("current-content-button");
    })

    button.classList.add("current-content-button");
}

export default updateActiveButton;