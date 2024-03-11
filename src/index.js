import './style.css'
import aboutContent from './content/about';
import menuContent from './content/menu';
import contactContent from './content/contact';
import updateActiveButton from './functions/updateActiveButton';
import onPageLoad from './functions/onPageLoad';


const nav = document.querySelector("nav");
const restaurantName = document.createElement("h1");
restaurantName.classList.add("restaurant-name")
const restaurantNameText = document.createTextNode("Lorem ipsum");
restaurantName.appendChild(restaurantNameText);
nav.insertBefore(restaurantName, nav.firstChild);

const changePageButtons = document.querySelectorAll("[data-action]");

changePageButtons.forEach(button => {
    const action = button.dataset.action;

    button.addEventListener("click", (e) => {
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
        updateActiveButton(e.target);
    })

});

onPageLoad();
