// Drop-down Menu

const dropDownBtn = document.getElementById("drop-down-btn");
dropDownBtn.style.cursor = "pointer";
const menu = document.getElementById("nav-links");
let isVisible = false;
dropDownBtn.addEventListener('click', function (event) {
    !isVisible?isVisible=true:isVisible=false;
    isVisible?menu.classList.add("dp-block"):menu.classList.remove("dp-block");
});

// set active Page

let path = window.location.pathname;
let activePage = path.split("/").pop();
let activeElement;
switch(activePage){
    case "index.html":
        activeElement = document.getElementById("home-link");
        activeElement.style.backgroundColor = "#ff61af";
        activeElement.firstChild.style.color = "#ffffff";
        break;
    case "quiz.html":
        activeElement = document.getElementById("quiz-link");
        activeElement.style.backgroundColor = "#ff61af";
        activeElement.firstChild.style.color = "#ffffff";
        break;
    case "result.html":
            activeElement = document.getElementById("quiz-link");
            activeElement.style.backgroundColor = "#ff61af";
            activeElement.firstChild.style.color = "#ffffff";
            break;
    case "aboutUs2.html":
        activeElement = document.getElementById("about-link");
        activeElement.style.backgroundColor = "#ff61af";
        activeElement.firstChild.style.color = "#ffffff";
        break;
    case "contact.html":
        activeElement = document.getElementById("contact-link");
        activeElement.style.backgroundColor = "#ff61af";
        activeElement.firstChild.style.color = "#ffffff";
        break;
}

// Logo click to intro page and Intropagebutton to Sites

let navDistillery = document.getElementById("header-logo-text2");
navDistillery.style.cursor = "pointer";
navDistillery.addEventListener('click', function (event){
    location.href = "index.html";
});
