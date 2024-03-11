import render from '../functions/renderContent';

const createAbout = () => {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const restaurantName = document.createElement("h1");
    const restaurantNameText = document.createTextNode("Proin eu velit la Lorem ipsum!");
    restaurantName.appendChild(restaurantNameText);

    const aboutImageContainer = document.createElement("div");
    aboutImageContainer.classList.add("about-image");

    const about = document.createElement("p");
    const aboutText = document.createTextNode("Sed non sodales magna. Ut interdum vitae sapien sed lobortis. Vivamus in metus nisi. Aliquam nec augue velit. Sed elit odio, molestie vel semper id, dictum tempor augue. Duis venenatis purus sit amet hendrerit tristique. Donec ornare risus felis, eget sagittis libero iaculis pretium. Proin eu velit vel tellus mattis consectetur. Fusce pharetra orci id iaculis condimentum. Nam eu justo aliquet urna blandit iaculis a at tortor. Nam convallis leo sit amet consectetur tincidunt.");
    about.appendChild(aboutText);

    aboutContainer.append(restaurantName);
    aboutContainer.append(aboutImageContainer);
    aboutContainer.append(about);

    return aboutContainer;
}

const displayAbout = () => {
    render(createAbout());
}

export default displayAbout;