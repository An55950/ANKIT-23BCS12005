// Product data with categories
const products = [
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Headphones", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "Novel", category: "books" },
  { name: "Cookbook", category: "books" }
];

const productContainer = document.getElementById("products");
const categorySelect = document.getElementById("category");

// Function to render products based on filter
function renderProducts(filter) {
  productContainer.innerHTML = "";

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");
    productDiv.textContent = product.name;
    productContainer.appendChild(productDiv);
  });
}

renderProducts("all");

// Event listener for filter change
categorySelect.addEventListener("change", (e) => {
  renderProducts(e.target.value);
});

