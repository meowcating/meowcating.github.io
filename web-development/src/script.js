const getMenuList = document.getElementById("menu-small");
const getMenuButton = document.getElementById("menu-toggle");
function menuToggle() {
    getMenuList.classList.toggle("show-hide");
    getMenuButton.classList.toggle("show-hide");
}
