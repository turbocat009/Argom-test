document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("contextMenu");
    let menuOpen = false;
    menuButton.addEventListener("click", () => {
        if(menuOpen){
            menu.classList.add("divClose");
            setTimeout(function () {
                menu.classList.remove("divClose");
                menu.classList.add("none");
            }, 500);
            menuOpen = false;
        } else{
            menu.classList.remove("none");
            menu.classList.add("divOpen");
            setTimeout(function () {
                menu.classList.remove("divOpen");
            }, 499);
            menuOpen = true;
        }
    })
})