import { addToCart } from './utils/cart.js';
import { products } from './data.js';

const productList = document.querySelector('.product-list');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Preț: <span class="price">${product.price}</span> Lei</p>
        <button class="add-to-cart">Adaugă în coș</button>
    `;
    productCard.querySelector('.add-to-cart').addEventListener('click', () => {
        addToCart(product);
    });
    productList.appendChild(productCard);
});