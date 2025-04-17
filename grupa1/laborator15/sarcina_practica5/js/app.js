// Array cu produse
const products = [
    { name: "Laptop", price: 3000, category: "electronics" },
    { name: "Tricou", price: 50, category: "clothing" },
    { name: "Canapea", price: 1200, category: "home" },
    { name: "Telefon", price: 2000, category: "electronics" },
    { name: "Geacă", price: 300, category: "clothing" },
    { name: "Masă", price: 800, category: "home" },
];

// Elemente DOM
const productList = document.getElementById("product-list");
const filterForm = document.getElementById("filter-form");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");

// Funcție pentru afișarea produselor
const displayProducts = (filteredProducts) => {
    productList.innerHTML = ""; // Golește lista de produse
    filteredProducts.forEach(({ name, price, category }) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <h2>${name}</h2>
            <p>Preț: ${price} RON</p>
            <p>Categorie: ${category}</p>
        `;
        productList.appendChild(productCard);
    });
};

// Funcție pentru filtrarea produselor
const filterProducts = () => {
    const checkedCategories = Array.from(
        filterForm.querySelectorAll("input[type='checkbox']:checked")
    ).map((checkbox) => checkbox.value);

    const maxPrice = parseInt(priceRange.value, 10);

    const filteredProducts = products.filter((product) => {
        const matchesCategory = checkedCategories.length
            ? checkedCategories.includes(product.category)
            : true;
        const matchesPrice = product.price <= maxPrice;
        return matchesCategory && matchesPrice;
    });

    displayProducts(filteredProducts);
};

// Actualizare valoare slider
priceRange.addEventListener("input", () => {
    priceValue.textContent = `${priceRange.value} RON`;
    filterProducts();
});

// Eveniment pentru checkbox-uri
filterForm.addEventListener("change", filterProducts);

// Afișează toate produsele la început
displayProducts(products);