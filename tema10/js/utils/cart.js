const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

const addToCart = (product) => {
    const cart = getCart();
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

const updateCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const removeFromCart = (index) => {
    const cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export { getCart, addToCart, updateCart, removeFromCart };