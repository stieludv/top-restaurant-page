import displayAbout from '../content/about';
import updateActiveButton from './updateActiveButton';

// On page load render about.js
const onPageLoad = () => {
    displayAbout();

    const aboutButton = document.querySelector("[data-action=about]");
    updateActiveButton(aboutButton)
}

export default onPageLoad;