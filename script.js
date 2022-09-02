const share = document.getElementById("share");
const button = document.getElementById("button");

share.style.display = "none";

button.addEventListener("click", () => {
    if (share.style.display == "flex") {
        share.style.display = "none";
        button.classList.replace("activeBtn", "idleBtn");
    } else {
        share.style.display = "flex";
        button.classList.replace("idleBtn", "activeBtn");i
    } 
});
