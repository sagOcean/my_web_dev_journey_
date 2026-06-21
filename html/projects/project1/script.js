// script.js

// Welcome alert when page loads

window.addEventListener("load", () => {
    console.log("Welcome to Swiggy Clone");
});

// Search bar interaction

const searchInput = document.querySelector('input[type="text"]');

searchInput.addEventListener("focus", () => {
    searchInput.style.backgroundColor = "#fff7f0";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.backgroundColor = "white";
});

// Search icon click

const searchIcon = document.querySelector(".fa-magnifying-glass");

searchIcon.addEventListener("click", () => {

    if (searchInput.value.trim() === "") {
        alert("Please enter restaurant or food item");
    }

    else {
        alert(`Searching for: ${searchInput.value}`);
    }
});

// Sign in button

const signInBtn = document.querySelectorAll("button")[1];

signInBtn.addEventListener("click", () => {
    alert("Sign in feature coming soon!");
});

// Get app button

const appBtn = document.querySelectorAll("button")[0];

appBtn.addEventListener("click", () => {
    alert("Redirecting to app download...");
});