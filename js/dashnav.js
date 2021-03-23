// Create Element Variables
const navbar = document.querySelector(".topnav-dashboard")
const navExpander = document.createElement("div")

// Set Element Attributes
navExpander.setAttribute("class", "nav-mobile-expander")

// Add nav expander text
navExpander.innerText = ">"

// Mousedown Event Listener
navExpander.addEventListener("mousedown", () => {
    // Loop through all nav-items, except for the first two
    for (var i = 2; i < navbar.querySelectorAll(".nav-item").length; i++)
        // Toggles the class 'nav-mobile-hidden'
        navbar.querySelectorAll(".nav-item")[i].classList.toggle("nav-mobile-hidden")
    
    // Toggle the text
    navExpander.innerText = (navExpander.innerText == ">") ? "<" : ">"
})

window.onload = () => {
    // Loop through all nav-items, except for the first two
    for (var i = 2; i < navbar.querySelectorAll(".nav-item").length; i++)
        // Toggles the class 'nav-mobile-hidden'
        navbar.querySelectorAll(".nav-item")[i].classList.toggle("nav-mobile-hidden")
    // Add navExpander element to the nav bar
    navbar.append(navExpander)
}