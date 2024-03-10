import clear from '../functions/clearNode';

const renderContent = (content) => {
    const contentContainer = document.querySelector("#content");
    clear(contentContainer);
    contentContainer.appendChild(content);
}

export default renderContent;