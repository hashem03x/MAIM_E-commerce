# E-Commerce Project

## Overview

This is a basic e-commerce web application that allows users to:

- **Register and Log In**: Create an account or log in with existing credentials.
- **Browse Products**: View detailed information about products.
- **Add to Cart**: Add products to a shopping cart.
- **Checkout**: Complete the purchase process.

The project uses HTML, CSS, JavaScript, and Bootstrap for the frontend, with SweetAlert2 for enhanced user notifications.

## Project Structure

The project is organized into the following directories and files:

```
/ecommerce-project
│
├── /css
│   └── main.css            # Custom CSS for styling the project
│   └── shop.css            # Custom CSS for styling shop page
│
├── /js
│   ├── index.js              # Main JavaScript file containing core functionalities
│   ├── userAuth.js           # JavaScript for handling authentication (login/register)
│   └── cart.js               # JavaScript for cart functionalities
│   └── checkuserStatus.js    # JavaScript for handling authentication
│   └── shop.js               # JavaScript for shop functionalities
│   └── checkout.js           # JavaScript for checkout functionalities
│
│

│
├── index.html                # Homepage with Featured products listing
├── login.html                # Login page
├── register.html             # Registration page
├── shop.html                 # Products page
└── checkout.html             # Checkout page
└── contact.html              # contact Us page
└── checkout.html             # Checkout page
└── cart.html                 # Cart page
│
└── README.md                 # This documentation
```

## Dependencies

- **Bootstrap**: For responsive design and styling.
- **SweetAlert2**: For enhanced user alerts and notifications.

### Including Libraries

In your HTML files, you should include the following CDN links for Bootstrap and SweetAlert2:

```html
<!-- Bootstrap CSS -->
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>

<!-- SweetAlert2 CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"
/>
```

```html
<!-- jQuery (required for Bootstrap JavaScript plugins) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<!-- SweetAlert2 JS -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js"></script>
```

## How to Run the Project

1. **Clone the Repository**

   Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/yourusername/ecommerce-project.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd ecommerce-project
   ```

3. **Open the Project**

   Open the `index.html` file in your preferred web browser to start using the application. You can open it directly from your file explorer or use a local server if you prefer.

   - **Using Live Server Extension in VS Code**:
     If you use Visual Studio Code, you can use the Live Server extension to serve the project:
     1. Install the Live Server extension.
     2. Right-click on `index.html` and select "Open with Live Server".

4. **Testing**

   Test the functionality of the application by navigating through the different pages:

   - Register a new account.
   - Log in with the registered account.
   - Browse products and add them to the cart.
   - Proceed to checkout and complete the purchase.

## Code Explanation

- **HTML**: The main structure of the application is defined in HTML files. These files include the core pages such as `index.html`, `login.html`, `register.html`, `product.html`, and `checkout.html`.
- **CSS**: The custom styles are located in `styles.css`. Bootstrap provides the default styling and layout.
- **JavaScript**: The functionality of the application is implemented in JavaScript files:

  - `main.js`: Contains general functionalities such as page interactions.
  - `auth.js`: Handles user authentication, including login and registration.
  - `cart.js`: Manages cart operations, such as adding and removing items.

- **SweetAlert2**: Used for displaying user-friendly alert messages, such as success notifications for registration and errors for failed login attempts.

## Contributing

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any section to better fit the specifics of your project or add more details as necessary.
