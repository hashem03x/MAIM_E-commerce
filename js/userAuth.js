
if (!localStorage.getItem("isLoggedIn")) {
    localStorage.setItem("isLoggedIn", false)
}

if (window.location.href.includes("register")) {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('registerForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            if (localStorage.getItem(email)) {
                document.getElementById('registerMessage').innerHTML = '<div class="alert alert-danger">Email already registered!</div>';
            } else {
                const user = {
                    name: name,
                    email: email,
                    password: password
                };

                localStorage.setItem(email, JSON.stringify(user));
                document.getElementById('registerMessage').innerHTML = '<div class="alert alert-success">Registration successful! <a href="login.html">Login here</a></div>';
            }
        });
    })
}

if (window.location.href.includes("login")) {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const storedUser = localStorage.getItem(email);

            if (storedUser) {
                const user = JSON.parse(storedUser);

                if (user.password === password) {
                    document.getElementById('loginMessage').innerHTML = '<div class="alert alert-success">Login successful!</div>';
                    localStorage.setItem("isLoggedIn", true)
                    window.location.href = 'index.html';
                } else {
                    document.getElementById('loginMessage').innerHTML = '<div class="alert alert-danger">Invalid password!</div>';
                }
            } else {
                document.getElementById('loginMessage').innerHTML = '<div class="alert alert-danger">No account found with this email!</div>';
            }
        });
    })
}



const checkUser = () => {
    let loggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"))
    if (loggedIn) {
        window.location.href = "index.html"
    } else {
        return
    }
}
checkUser()


document.addEventListener("DOMContentLoaded", () => {
    checkUser();
});