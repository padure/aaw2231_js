const data = [
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Nihil in aut repudiandae error non asperiores corrupti."
    },
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Autem autem ipsam corrupti sunt est voluptatibus eos."
    },
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Id voluptatum necessitatibus enim nemo aut laboriosam."
    },
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Praesentium ea ipsum animi voluptatem quam et."
    },
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Quia nihil fuga eum voluptatem et aliquid."
    },
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Necessitatibus eum nostrum vitae et cum velit et nisi."
    },
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Non consequatur possimus ipsum sed quos velit doloremque cum deserunt."
    },
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Quam nesciunt explicabo omnis laborum."
    },
    {
        id: "95755a01-a9ed-47cb-88ed-793af337c0a7",
        text: "Aliquam velit sit."
    },
];

const dataElement = document.querySelector(".data");
const searchElement = document.querySelector("#search");
const renderData = (list) => {
    dataElement.innerHTML = "";
    list.forEach( element => {
        dataElement.innerHTML += `<p key="${element.id}">${element.text}</p>`;
    } );
}
//Search text
searchElement.addEventListener("input", (e) => {
    const text = e.target.value.toUpperCase();
    const newData = data.filter( element => element.text.toUpperCase().includes(text) );
    renderData(newData);
});

renderData(data);
