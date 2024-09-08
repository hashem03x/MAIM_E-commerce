
// Adding submit event listener to the checkout form
document.getElementById('checkout-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = this;

    // Check all required fields
    if (form.checkValidity() === false) {
        e.stopPropagation();
    } else {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        form.reset();
        Swal.fire({
            title: "Checkout Completed!",
            text: "We Recived you Order",
            icon: "success"
        });
        form.classList.remove('was-validated');
        window.location.href("index.html")
    }

    form.classList.add('was-validated');
});

