import render from '../functions/renderContent';

const menuItems = [
    {
        name: "menuItem1",
        description: "description of menuItem1",
        ingredients: [],
        image: "food.avif"
    },
    {
        name: "menuItem2",
        description: "description of menuItem2",
        ingredients: [],
        image: "food.avif"
    },
    {
        name: "menuItem3",
        description: "description of menuItem3",
        ingredients: [],
        image: "food.avif"
    },
    {
        name: "menuItem4",
        description: "description of menuItem4",
        ingredients: [],
        image: "food.avif"
    },
    {
        name: "menuItem5",
        description: "description of menuItem5",
        ingredients: [],
        image: "food.avif"
    },
    {
        name: "menuItem6",
        description: "description of menuItem6",
        ingredients: [],
        image: "food.avif"
    },
    {
        name: "menuItem7",
        description: "description of menuItem7",
        ingredients: [],
        image: "food.avif"
    },
    {
        name: "menuItem8",
        description: "description of menuItem8",
        ingredients: [],
        image: "food.avif"
    },
]

const createMenu = () => {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-item-container");

    menuItems.forEach(menuItem => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("menu-item");

        // Create and append image
        const image = document.createElement("img");
        image.setAttribute("src", require(`../../static/${menuItem.image}`));
        itemContainer.appendChild(image);

        // Create and append name
        const name = document.createElement("p");
        name.classList.add("menu-item-name");
        const nameText = document.createTextNode(menuItem.name);
        name.appendChild(nameText);
        itemContainer.appendChild(name);

        // Create and append description
        const description = document.createElement("p");
        const descriptionText = document.createTextNode(menuItem.description);
        description.appendChild(descriptionText);
        itemContainer.appendChild(description);

        // Append item to menu
        menuDiv.appendChild(itemContainer);
    });

    return menuDiv;
}

const displayMenu = () => {
    render(createMenu(menuItems));
}

export default displayMenu;