document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("contextMenu");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");


    let menuOpen = false;
    menuButton.addEventListener("click", () => {
        if(menuOpen){
            menu.classList.add("divClose");
            btn1.classList.add("btn1-");
            btn2.classList.add("btn2-");
            btn3.classList.add("btn3-");
            btn1.classList.remove("btn1X");
            btn2.classList.remove("btn2X");
            btn3.classList.remove("btn3X");
            menuButton.classList.add("moveBtn2")
            menuButton.classList.remove("moveBtn")


            setTimeout(function () {
                menu.classList.remove("divClose");
                menu.classList.add("none");
            }, 500);
            menuOpen = false;
        } else{
            menu.classList.remove("none");
            menu.classList.add("divOpen");
            btn1.classList.add("btn1X");
            btn2.classList.add("btn2X");
            btn3.classList.add("btn3X");
            btn1.classList.remove("btn1-");
            btn2.classList.remove("btn2-");
            btn3.classList.remove("btn3-");
            menuButton.classList.add("moveBtn")
            menuButton.classList.remove("moveBtn2")

            setTimeout(function () {
                menu.classList.remove("divOpen");
            }, 499);
            menuOpen = true;
        }
    })
})
