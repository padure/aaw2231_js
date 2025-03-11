const getFirstUser = (list) => {
    let [firstUser] = list;
    return `<p>${firstUser}</p>`;
}

const display = (template) => {
    return `<div>Utilizatorul este: ${template}</div>`;
}

const displayAllUsers = (users) => {
    let response = `<div class='container'>`;
    users.forEach(user => response += display(user))
    response+= `</div>`;
    return response;
};

export {
    getFirstUser,
    display,
    displayAllUsers
}