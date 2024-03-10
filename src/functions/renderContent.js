const renderContent = (content) => {
    const contentContainer = document.querySelector("#content");
    contentContainer.appendChild(content);
}

export default renderContent;