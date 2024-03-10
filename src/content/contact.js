import render from '../functions/renderContent';


const createContact = () => {
    const contactDiv = document.createElement("div");

    return contactDiv;
}


const displayContact = () => {
    render(createContact());
}

export default displayContact;