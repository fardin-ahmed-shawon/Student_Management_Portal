const menu = document.getElementById("menubar");
const menubtn = document.getElementById("openMenuBtn");
const hidebtn = document.getElementById("hideMenuBtn");

// add event listener
menubtn.addEventListener("click", showMenubar);
hidebtn.addEventListener("click", hideMenubar);

function showMenubar() {
    menu.style.width = '250px'; 
}

function hideMenubar() {
    menu.style.width = '0px';
}