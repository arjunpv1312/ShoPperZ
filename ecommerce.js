const closeBtn = document.getElementById("closeBtn");
const hamBtn = document.getElementById("hamBtn");
const menu = document.getElementById("menu");

hamBtn.addEventListener("click", () => {
    menu.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
    menu.style.visibility = "hidden";
});
