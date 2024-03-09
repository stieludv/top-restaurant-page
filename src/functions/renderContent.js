export default renderContent = (content) => {
    const contentContainer = document.querySelector("#content");
    contentContainer.appendChild(content);
}