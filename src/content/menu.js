import render from '../functions/renderContent';

const menuItems = [
    {
        name: "menuItem1",
        description: "",
        ingredients: [],
        image: ""
    },
    {
        name: "menuItem2",
        description: "",
        ingredients: [],
        image: ""
    },
]

const createMenu = () => {
    const menuDiv = document.createElement("div");

    menuItems.forEach(element => {
        // Create a container
            // Contains Image
            // Contains Name
            // Contains ingredients
    });

    return menuDiv;
}

const displayMenu = () => {
    render(createMenu(menuItems));
}

export default displayMenu;