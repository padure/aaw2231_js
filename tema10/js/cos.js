import { getCart, updateCart, removeFromCart } from './utils/cart.js';

const cartContainer = document.getElementById('cart');
const totalPriceElement = document.getElementById('total-price');

const renderCart = () => {
    const cart = getCart();
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <div class="cart-item-details">
                <span>${item.price * item.quantity} Lei</span>
                <input type="number" min="1" value="${item.quantity}" data-index="${index}">
                <button data-index="${index}">Șterge</button>
            </div>
        `;
        cartItem.querySelector('input').addEventListener('input', (e) => {
            item.quantity = parseInt(e.target.value, 10);
            updateCart(cart);
            renderCart();
        });
        cartItem.querySelector('button').addEventListener('click', () => {
            removeFromCart(index);
            renderCart();
        });
        cartContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

renderCart();