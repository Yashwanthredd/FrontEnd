// Sample products array with provided images
const products = [
  {
    id: 1,
    title: "Camera",
    description: "A high-quality camera for photography.",
    price: 299.99,
    quantity: 10,
    category: "Electronics",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Camera Lens",
    description: "A close-up lens for your camera.",
    price: 89.99,
    quantity: 20,
    category: "Accessories",
    image: "https://images.pexels.com/photos/15643985/pexels-photo-15643985/free-photo-of-close-up-of-camera-lens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Tripod",
    description: "A sturdy tripod for stable shots.",
    price: 49.99,
    quantity: 15,
    category: "Accessories",
    image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "DSLR Camera",
    description: "Professional DSLR camera with high resolution.",
    price: 999.99,
    quantity: 5,
    category: "Electronics",
    image: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

// Display products in the table, including images
function displayProducts() {
  const productTable = document.getElementById('productTable');
  productTable.innerHTML = '';

  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${product.image}" alt="${product.title}" class="product-image"></td>
      <td>${product.title}</td>
      <td>${product.description}</td>
      <td>$${product.price}</td>
      <td>${product.quantity}</td>
      <td>${product.category}</td>
      <td>
        <button onclick="editProduct(${product.id})">Edit</button>
        <button onclick="deleteProduct(${product.id})">Delete</button>
      </td>
    `;
    productTable.appendChild(row);
  });
}

// Add a new product
document.getElementById('createProductForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const newProduct = {
    id: products.length + 1,
    title: document.getElementById('name').value,
    description: document.getElementById('description').value,
    price: parseFloat(document.getElementById('price').value),
    quantity: parseInt(document.getElementById('quantity').value),
    category: document.getElementById('category').value || "general",
    image: document.getElementById('imageUrl').value || "https://via.placeholder.com/150",
  };

  products.push(newProduct);
  displayProducts();
  e.target.reset();
});

// Delete a product
function deleteProduct(id) {
  const index = products.findIndex(product => product.id === id);
  if (index > -1) {
    products.splice(index, 1);
    displayProducts();
  }
}

// Search functionality
document.getElementById('search').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const rows = document.querySelectorAll('#productTable tr');

  rows.forEach(row => {
    const name = row.cells[1].textContent.toLowerCase();
    const category = row.cells[5].textContent.toLowerCase();
    row.style.display = name.includes(searchTerm) || category.includes(searchTerm) ? '' : 'none';
  });
});

// Initialize products on page load
displayProducts();
