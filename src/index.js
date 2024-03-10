import aboutContent from './content/about';
import menuContent from './content/menu';
import contactContent from './content/contact'

document.addEventListener('DOMContentLoaded', () => {
    const changePageButtons = document.querySelectorAll("[data-action]");

    changePageButtons.forEach(button => {
        const action = button.dataset.action;
    
        button.addEventListener("click", () => {
            switch (action) {
                case "about":
                    aboutContent();
                    break;
                case "menu":
                    menuContent();
                    break;
                case "contact":
                    contactContent();
                    break;
            }
        })
    
    });

    aboutContent();
});

