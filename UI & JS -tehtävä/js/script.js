//Functionality for the JS-exercise







//Other functionality
let main = document.querySelectorAll(".main");

//Header icons

let infoIcon = document.querySelector(".info");
let infoPage = document.getElementById("info");
infoIcon.addEventListener("click", () => infoPage.classList.toggle("hide"));

let archiveIcon = document.querySelector(".archive");
archiveIcon.addEventListener("click", () => {
    infoPage.classList.add("hide");
    main.forEach(n => n.classList.add("hide"));
});

let addIcon = document.querySelector(".add");
addIcon.addEventListener("click", () => {
    infoPage.classList.add("hide");
    main.forEach(n => n.classList.remove("hide"));
})