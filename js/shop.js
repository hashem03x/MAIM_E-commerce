// Global Variables
const API = "https://fakestoreapi.com/products";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let allProducts = [];

// Fetch products and store them in `allProducts`
const FetchProducts = async (targetAPi) => {
    try {
        const response = await fetch(targetAPi);
        const data = await response.json();
        allProducts = data;
        displayProducts(allProducts);
        return data;
    } catch {
        console.log("Something Went Wrong");
    }
};

// load all products
FetchProducts(API);

//  display products
function displayProducts(products) {
    var productsContainer = document.querySelector("#products-container .row");
    productsContainer.innerHTML = "";
    products.map((product) => {
        productsContainer.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 justify-content-center align-items-center d-flex g-4">
            <div class="card d-flex" style="width: 18rem; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 10px 0">
                <img src="${product.image}" class="card-img-top" style="height:180px" alt="${product.title}">
                <h5 class='mt-4 fw-bold'>Price: ${product.price} EGP</h5>
                <div class="card-body align-items-center mt-4">
                    <h5 class="card-title d-flex align-items-center justify-content-center text-center">${product.title}</h5>
                    <button type="button" class="btn btn-primary mt-4" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">Add To Cart</button>
                    <button type="button" class="mt-4 btn btn-secondary" data-bs-toggle="modal" data-bs-target="#productModal" onclick="showProductDetails(${product.id})">Show Details</button>
                </div>
            </div>
        </div>`;
    });
}

// Add event listener to search input
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

//  add products to the cart
function addToCart(id, title, price, image) {
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: id,
            title: title,
            price: price,
            image: image,
            quantity: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item Has Been added to cart",
        showConfirmButton: false,
        timer: 1500
    });
    reloadCart(cart.length)
}

// show product details in the modal
function showProductDetails(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById('modalProductImage').src = product.image;
            document.getElementById('modalProductTitle').textContent = product.title;
            document.getElementById('modalProductDescription').textContent = product.description;
            document.getElementById('modalProductPrice').textContent = product.price;
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
        });
}


const FilterByCategory = async (e) => {
    var FilterdProducts;
    if (e.target.value === 'All') {
        FilterdProducts = await FetchProducts(`${API}`)
        displayProducts(FilterdProducts)
    } else {

        FilterdProducts = await FetchProducts(`${API}/category/${e.target.value}`);
        displayProducts(FilterdProducts)
    }
};

// Price Range Handler

const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
const minValueDisplay = document.getElementById('minValue');
const maxValueDisplay = document.getElementById('maxValue');
const rangeProgress = document.getElementById('rangeProgress');
function updateRange() {
    const minValue = parseInt(minRange.value);
    const maxValue = parseInt(maxRange.value);
    if (minValue > maxValue) {
        minRange.value = maxValue;
    }
    minValueDisplay.innerText = minRange.value;
    maxValueDisplay.innerText = maxRange.value;
    const minPercent = (minRange.value / minRange.max) * 100;
    const maxPercent = (maxRange.value / maxRange.max) * 100;
    rangeProgress.style.left = ` ${minPercent}%`;
    rangeProgress.style.width = `${maxPercent - minPercent}%`;
    filterByPrice();
}
minRange.addEventListener('input', updateRange);
maxRange.addEventListener('input', updateRange);
updateRange();

// Function to filter Products By Price
function filterByPrice() {
    const minPrice = parseInt(minRange.value);
    const maxPrice = parseInt(maxRange.value);

    FetchProducts(API).then(products => {
        const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        displayProducts(filteredProducts);
    });
}

minRange.addEventListener('change', filterByPrice);
maxRange.addEventListener('change', filterByPrice);



// Function to Reload Cart after any change or Reload
function reloadCart(length) {
    let cartHolder = document.getElementById("cart-length")
    cartHolder.innerHTML = length
}

// Scroll to top button
document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});