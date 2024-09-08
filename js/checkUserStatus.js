const checkUser = () => {
    let loggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"))
    if (loggedIn) {
        const normalButtons = document.querySelectorAll(".available")
        normalButtons.forEach((button) => button.remove())
    } else {
        const securedButtons = document.querySelectorAll(".secured")
        securedButtons.forEach((button) => button.remove())
    }
}
checkUser()


document.addEventListener("DOMContentLoaded", () => {
    checkUser();
});
