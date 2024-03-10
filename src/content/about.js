import render from '../functions/renderContent';

const createAbout = () => {
    const aboutContainer = document.createElement("div");

    return aboutContainer;
}

const displayAbout = () => {
    render(createAbout());
}

export default displayAbout;