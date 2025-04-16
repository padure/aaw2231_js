const containerElement = document.querySelector('.container');

const selectCard = (e) => {
    const cards = document.querySelectorAll('.card');
    if(!e.classList.contains('active')){
        cards.forEach( card => {
            card.classList.remove('active');
        });
    }
    e.classList.toggle('active');
}

for (let i = 0; i < 25; i++) {
    const element = `<div class='card' onclick='selectCard(this)'></div>`;
    containerElement.innerHTML += element;
}