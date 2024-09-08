let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Function to render the cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the table body first

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="5" style="text-align: center;">Your cart is empty</td></tr>';
    }

    cart.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
        <td style="text-align: center;"><img src="${item.image}" class="img-fluid text-center" style="width:20%; height:30%" alt="${item.title}"></td>
        <td>${item.title}</td>
        <td>
          <input type="number" class="form-control" value="${item.quantity}" min="1" data-index="${index}">
        </td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
        <td>
          <button class="btn btn-danger btn-sm" data-index="${index}">Remove</button>
        </td>
      `;

        cartItemsContainer.appendChild(row);
    });

    updateTotalPrice();
}

// Function to update the total price dynamically
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to save the cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Event listener to handle quantity updates and item removal
document.getElementById('cart-items').addEventListener('input', function (e) {
    if (e.target.tagName === 'INPUT') {
        const index = e.target.getAttribute('data-index');
        const newQuantity = parseInt(e.target.value);
        cart[index].quantity = newQuantity;
        saveCart(); // Save cart after updating quantity
        renderCartItems();
    }
});

document.getElementById('cart-items').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const index = e.target.getAttribute('data-index');
                cart.splice(index, 1);
                saveCart();
                renderCartItems();
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your Item has been deleted.",
                    icon: "success"
                });
                function reloadCart() {
                    if (window.localStorage.getItem("cart")) {
                        let cartHolder = document.getElementById("cart-length");
                        const cart = JSON.parse(window.localStorage.getItem("cart"));
                        cartHolder.innerHTML = cart.length;
                    }
                }
                reloadCart();
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });

    }
});

// Initial rendering of cart items
renderCartItems();

if (cart.length === 0) {
    document.getElementById("proceed-btn").setAttribute("disabled", true)
    document.getElementById("proceed-btn").innerHTML = 'Please Add some Items to cart first'
}

