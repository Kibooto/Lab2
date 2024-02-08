const cards = document.getElementById('cards');
const imageDataArray = [
    { src: 'static/images/toy1.webp', description: 'Опис 1' },
    { src: 'static/images/toy2.webp', description: 'Опис 2' },
    { src: 'static/images/toy3.webp', description: 'Опис 3' },
    { src: 'static/images/toy4.webp', description: 'Опис 4' },
    { src: 'static/images/toy5.webp', description: 'Опис 5' },
    { src: 'static/images/toy6.webp', description: 'Опис 6' },
    { src: 'static/images/toy7.webp', description: 'Опис 7' },
    { src: 'static/images/toy8.webp', description: 'Опис 8' },
    { src: 'static/images/toy9.webp', description: 'Опис 9' },
    { src: 'static/images/toy10.webp', description: 'Опис 10' },
    { src: 'static/images/toy11.webp', description: 'Опис 11' },
    { src: 'static/images/toy12.webp', description: 'Опис 12' },
    { src: 'static/images/toy13.webp', description: 'Опис 13' },
    { src: 'static/images/toy1.webp', description: 'Опис 1' },
    { src: 'static/images/toy2.webp', description: 'Опис 2' },
    { src: 'static/images/toy3.webp', description: 'Опис 3' },
    { src: 'static/images/toy4.webp', description: 'Опис 4' },
    { src: 'static/images/toy5.webp', description: 'Опис 5' },
    { src: 'static/images/toy6.webp', description: 'Опис 6' },
    { src: 'static/images/toy7.webp', description: 'Опис 7' },
    { src: 'static/images/toy8.webp', description: 'Опис 8' },
    { src: 'static/images/toy9.webp', description: 'Опис 9' },
    { src: 'static/images/toy10.webp', description: 'Опис 10' },
    { src: 'static/images/toy11.webp', description: 'Опис 11' },
    { src: 'static/images/toy12.webp', description: 'Опис 12' },
    { src: 'static/images/toy1.webp', description: 'Опис 1' },
    { src: 'static/images/toy2.webp', description: 'Опис 2' },
    { src: 'static/images/toy3.webp', description: 'Опис 3' },
    { src: 'static/images/toy4.webp', description: 'Опис 4' },
    { src: 'static/images/toy5.webp', description: 'Опис 5' },
    { src: 'static/images/toy6.webp', description: 'Опис 6' },
    { src: 'static/images/toy7.webp', description: 'Опис 7' },
    { src: 'static/images/toy8.webp', description: 'Опис 8' },
    { src: 'static/images/toy9.webp', description: 'Опис 9' },
    { src: 'static/images/toy10.webp', description: 'Опис 10' },
    { src: 'static/images/toy11.webp', description: 'Опис 11' },
    { src: 'static/images/toy12.webp', description: 'Опис 12' },
];

function createCard(imageData) {
    const card = document.createElement('div');
    card.classList.add('catalog-item');

    const image = document.createElement('img');
    image.src = imageData.src;
    image.alt = '';

    const title = document.createElement('h4');
    title.textContent = imageData.description;

    const itemBuy = document.createElement('div');
    itemBuy.classList.add('item-buy');

    const price = document.createElement('p');
    price.textContent = '1000 грн';

    const button = document.createElement('button');
    button.textContent = 'Купити';

    itemBuy.appendChild(price);
    itemBuy.appendChild(button);

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(itemBuy);

    console.log(card);

    return card;
}

const cardsPerPage = 9; // Зміни кількість карток на сторінку
let currentPage = 1;

function loadCards() {
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const cardsToShow = imageDataArray.slice(start, end);

    cardsToShow.forEach((imageData) => {
        const card = createCard(imageData);
        cards.appendChild(card);
    });
}

window.addEventListener('load', loadCards);

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
        currentPage += 1;
        loadCards();
    }
});