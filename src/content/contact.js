import render from '../functions/renderContent';


const createContact = () => {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-div");

    const contactHeader = document.createElement("h1");
    const contactHeaderText = document.createTextNode("Contact Lorem ipsum");
    contactHeader.appendChild(contactHeaderText);

    const contactPhone = document.createElement("p");
    const contactPhoneText = document.createTextNode("+293 23 324 234");
    contactPhone.appendChild(contactPhoneText);

    const contactEmail = document.createElement("p");
    const contactEmailText = document.createTextNode("loremipsum@loremipsum.loremupsum");
    contactEmail.appendChild(contactEmailText);

    const contactAddress = document.createElement("p");
    const contactAddressText = document.createTextNode("lorem ipsum, ipsum, 234 233");
    contactAddress.appendChild(contactAddressText);

    // TODO:
    // Add in a contact form
    // Perhaps a map/google maps?

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactPhone);
    contactDiv.appendChild(contactEmail);
    contactDiv.appendChild(contactAddress);

    return contactDiv;
}


const displayContact = () => {
    render(createContact());
}

export default displayContact;