const FetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=8')
        var productsContainer = document.querySelector("#products-container .row")
        const data = await response.json()
        data.map((product) => {
            productsContainer.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 justify-content-center align-items-center d-flex g-4">
            <div class="card  d-flex" style="width: 18rem;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;padding:10px 0">
            <img src=${product.image} class="card-img-top"style="max-height:140px" alt=${product.title}>
            <div class="card-body align-items-between">
                <h5 class="card-title d-flex align-items-center justify-content-center"style='height:80px;text-align:center' >${product.title}</h5>
                <a href='/shop.html'><button type="button" class="btn btn-primary">Shop Now</button></a>
            </div>
            </div>
            </div>`
        })
    } catch {
        console.log("Something Went Wrong")
        productsContainer.innerHTML = `Something Went Wrong While Loading The Products`
    }
}

FetchProducts();



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

